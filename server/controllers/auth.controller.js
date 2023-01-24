    const {authService}  = require('../services/index')
    const authController={
        async register(req,res){
           try{
               const useHello = authService.hello()
               console.log(useHello)
           }catch(error){}
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