const { User } = require("../modals/user")

const findUserByEmail = async(email) =>{
    return await User.findOne({email})
}


module.exports={
    findUserByEmail
}