const {User} = require('../modals/user');
const httpStatus = require('http-status');
const {ApiError}= require('../middleware/apiError')

const createUser= async(email,password) =>{
    try{
        if(await User.emailTaken(email)){
            throw new ApiError(httpStatus.BAD_REQUEST,'Sorry Email Taken');
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
