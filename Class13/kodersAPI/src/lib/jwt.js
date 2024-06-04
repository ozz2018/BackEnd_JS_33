const jsonwebtoken = require ('jsonwebtoken')

const {JWT_SECRET}= process.env

function sign (playload){
    return jsonwebtoken.sign(playload,JWT_SECRET,{expiresIn:'1d' })
}

function veryfy(token){
    return jsonwebtoken.verify(token,JWT_SECRET )
}

module.exports={
    sign,
    verify
}