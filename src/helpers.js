const bcrypt = require('bcrypt')

async function hashPassword (password){
   return await bcrypt.hash(password, 10)  
}

async function verifyPassword(password, dbPassword){
    const result = await bcrypt.compare(password, dbPassword) 
    return result
}

module.exports = {hashPassword, verifyPassword};