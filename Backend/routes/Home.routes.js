import { Router } from 'express';
import jwt from 'jsonwebtoken';
import usermodel from '../models/user.model.js';





const routes= Router();

routes.get("/",async (req,res)=>{
    
    const payload= req.cookies
    console.log(payload.Token);
    
    try{
        const mail=  jwt.verify(payload.Token,process.env.JWT_SECRET)
        console.log(mail.Email);
            
   const user= await usermodel.findOne({"email":mail.Email});

   if(!user){
    
   console.log("mail",data.email);
      console.log("user not find 2");
    res.send('somthing went wrong 1')
    return;
   }
else{
    console.log(user);
       
    res.send("working home response")
   }
   
   

    }catch{
res.send("somthing was wrong ");

    }


    


    
})


export default routes;