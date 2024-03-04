const jwt = require('../helpers/jwt')
const {
    User,
    Pet,
  } = require('../database/models');

class controllerUser{    
    static login(req,res,next){
        const{email,password} = req.body
        User.findOne({ where: { email }})
            .then(data=>{
                if(data){
                    if(data.password === password){
                        console.log(data)
                        const {id, name, email, address, photo, phone} = data
                        req.headers.token = jwt.generateToken({id, name, email, address, photo, phone})
                        res.json({
                            token : req.headers.token,
                            id,
                            name,
                            email,
                            address,
                            photo,
                            phone
                        })
                    }else{
                        res.status(404).json({message : 'invalid password/username'})
                    }  
                }else{
                    res.status(404).json({message : 'invalid password/username'})
                }
            })
            .catch(err=>{
                next(err)
            })
    }

}

module.exports = controllerUser