const jwt = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const {
    Users,
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
            const updatedUser = await Users.update({ name }, { where: { id: userId } });
        
        
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


    static async googleLogin(req,res,next){
      const {token} = req.body
      const ticket = await client.verifyIdToken({
        idToken : token,
        audience : process.env.GOOGLE_CLIENT_ID
     })
     const payload = ticket.getPayload();

     // find existing user in database
     let existingUser = await Users.findOne({
        user_email : payload.email
      })

      if (!existingUser) {
        // if new user sign up
        await Users.create({
          user_name: payload.name,
          user_email: payload.email,
       })
      }

      const tokenCreated = jwt.generateToken(data)
      req.headers.token = tokenCreated
      res.json(req.headers.token)
  }

}

module.exports = controllerUser