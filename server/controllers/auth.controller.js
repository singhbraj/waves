    const {authService}  = require('../services/index')
    const httpStatus = require('http-status')

    
    const authController={
        async register(req,res,next){
           try{
            const {email,password} = req.body;
            const user = await authService.createUser(email,password)
            const token = await authService.genAuthToken(user)

               res.cookie('x-access-token',token).status(httpStatus.CREATED).send({user,token})
           }catch(error){
            console.log(error)
            next(error)
           }
        },
     async signin(req,res,next){
        try{

         const {email,password} = req.body;
         const user = await authService.signInWithAndPassword(email,password)
         const token = await authService.genAuthToken(user)
         res.cookie('x-access-token',token).send({user,token})

        }
        catch(error){
           next(error)
        }
     },
     async isAuth(req,res){
        try{

        }
        catch(error){
            
        }
     }
        
    }


 module.exports = authController