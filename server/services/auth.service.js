const {User} = require('../modals/user')

const createUser= async(email,password) =>{
    try{
        if(await User.emailTaken(email)){
            console.log("email is already in DB")
        }
     const user = new User({
        email,
        password
     })
     await user.save()
     return user
    }catch(error){
        throw error
    }
}

const genAuthToken = (user) =>{
    return user.generateAuthToken()

}

module.exports = {
    createUser,
    genAuthToken
}
