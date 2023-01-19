    const {authService}  = require('../services/index')
    const authController={
        async hello(){
           try{
               const useHello = authService.hello()
               console.log(useHello)
           }catch(error){}
        }
        
    }


 module.exports = authController