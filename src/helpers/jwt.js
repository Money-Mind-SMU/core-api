const jwt = require('jsonwebtoken')
function generateToken(data){
    return jwt.sign(data, 'secret');
}

function verifyToken(token){
    return jwt.verify(token, 'secret');
}

module.exports = {
    generateToken,
    verifyToken
}