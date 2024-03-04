
const jwt = require('../helpers/jwt')
const {
    User,
    Pet,
  } = require('../database/models');

function authentication(req,res,next){
    try {
        let decoded = jwt.verifyToken(req.headers.authorization);
        req.decoded = decoded
        next()
      } catch(err) {
        next(err)
      }
}

function authorization(req,res,next){
    Pet.findOne({ where: { id: req.params.id } })
        .then(pet =>{
            if(pet){
                if(pet.UserId == req.decoded.id){
                    next()
                }else{
                    res.status(401).json({message : 'Unauthorized user'})
                }
            }else{
                res.status(404).json({message: 'user not found'})
            }
        })
        .catch(err=>{
            next(err)
        })

}

function authorizationUser (req,res,next) {
    User.findOne({ where: { id: req.params.id } })
        .then(data=>{
            if(data){
                if(data.id == req.decoded.id){
                    next()
                }else{
                    res.status(401).json({message : 'Unauthorized user'})
                }
            }else{
                res.status(404).json({message: 'user is not found'})
            }
        })
        .catch(err=>{
            next(err)
        })

}


module.exports = {
    authentication,
    authorization,
    authorizationUser,
}