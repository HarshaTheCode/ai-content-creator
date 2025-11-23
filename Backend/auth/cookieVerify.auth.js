import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import usermodel from '../models/user.model.js'


export const  cookieVerifyAuth=async(req,res)=>{
try{

    console.log('runnig');
    const cookie= req.cookies.Token
    const  decodedmail=  jwt.verify(cookie,process.env.JWT_SECRET);
 
    const verifying= await usermodel.findOne({email :decodedmail.Email})
    console.log(verifying);


    if(!verifying){
    console.log("no user existes ");
    res.json({'auth':false})
    return
}


}catch(e){

    console.log('usefull errors',e);
    
    console.log("no user existes ");
     res.json({'auth':false})
      return
}
 

 
   
    
    res.json({'auth':true})
}