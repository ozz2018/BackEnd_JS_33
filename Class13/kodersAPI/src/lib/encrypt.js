const bcrypt = require('bcryptjs')

const SALT_ROUNDS= 10

function encrypt (text){
    return bcrypt.hash(text, SALT_ROUNDS)
}


function compare (plaintText, hash){
    return bcrypt.compare(plaintText,hash)
}

module.exports= {
    encrypt,
    compare
}