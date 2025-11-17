import usermodel from "../models/user.model.js";
import bcrypt from 'bcrypt'



export const userAuth = async (req,res)=>{

    const data= req.body;
    
   const user= await usermodel.findOne({"email":data.email});
    
   if(!user){
      console.log("user not find ");
    res.send('somthing went wrong 1')
    return;
   }
else{
    console.log(user);
       
   }

   const Actualpass=user.password;
   const plainpass= data.password;
   

   
   bcrypt.compare(plainpass, Actualpass, function(err, result) {
    
   if(!result){
       res.json({
        'auth':false
       })
        return;
    }
res.json({
    "auth":true
})

   
});





} 
