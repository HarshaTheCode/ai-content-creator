import usermodel from "../models/user.model.js";
import bcrypt from 'bcrypt'



export const userAuth = async (req,res)=>{

    const data= req.body;
    
   const user= await usermodel.findOne({"email":data.email});
    
   if(!user){
    
   console.log("mail",data.email);
      console.log("user not find 2");
    res.send('somthing went wrong 1')
    return;
   }
else{
    console.log(user);
       
   }

   const Actualpass=user.password;
   const plainpass= data.password;
   

   console.log("passs",Actualpass);
   console.log("mail",req.body);
   
   
   
   bcrypt.compare(plainpass, Actualpass, function(err, result) {
    
   if(!result){
    console.log("pass incorect");
    
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
