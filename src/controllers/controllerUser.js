const jwt = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const {
    User,
  } = require('../database/models');

class controllerUser{    
    static async updatedProfile(req,res,next){
        try {
            const userId = req.user.id; // Assuming the user ID is stored in the decoded JWT token
            const { name } = req.body;
        
            // Validate the request body
            if (!name) {
              return res.status(400).json({ error: 'Name is required for updating profile' });
            }
        
            // Update user profile in the database
            const updatedUser = await User.update({ name }, { where: { id: userId } });
        
            // Check if the user was found and updated
            if (updatedUser[0] === 0) {
              return res.status(404).json({ error: 'User not found' });
            }
        
            return res.status(200).json({ message: 'Successfully update user profile', data: { name } });
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }


    static googleLogin(req,res,next){
      const {token} = req.body
      client.verifyIdToken({
          idToken : token,
          audience : process.env.GOOGLE_CLIENT_ID
      })
      .then(ticket =>{
          const payload = ticket.getPayload();
          User.findOne({
              user_email : payload.email
          })
          .then(user=>{
              if(user){
                  console.log('data exist in db')
                  const {name,email,_id} = user
                  return {name,email,_id}
              }else{
                  console.log('creating new user')
                  const {name,email} = payload
                  User.create({
                      user_name: name,
                      user_email: email,
                  })
                  .then(data=>{
                      const {name,email,_id} = data
                      return {name,email,_id}
                  })
                 
              }
          })
          .then(data=>{
              let tokenCreated = jwt.generateToken(data)
              req.headers.token = tokenCreated
              res.json(req.headers.token)
              console.log(req.headers.token);
          })
          
      })
      .catch(err=>next(err))
  }

}

module.exports = controllerUser