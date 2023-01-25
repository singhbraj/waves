    const {authService}  = require('../services/index')
    const authController={
        async register(req,res,next){
           try{
            const {email,password} = req.body;
            const user = await authService.createUser(email,password)
            const token = await authService.genAuthToken(user)

               res.cookie('x-access-token',token).status(200).send({user,token})
           }catch(error){
            console.log(error)
           }
        },
     async signin(req,res){
        try{

        }
        catch(error){

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