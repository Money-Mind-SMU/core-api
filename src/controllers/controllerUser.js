const jwt = require('../helpers/jwt')
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

}

module.exports = controllerUser