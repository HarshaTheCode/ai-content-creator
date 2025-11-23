import { Router } from 'express';
import { userAuth } from '../auth/user.auth.js';
import { cookieVerifyAuth } from '../auth/cookieVerify.auth.js';




const routes= Router();

routes.post("/",(req,res)=>{
    userAuth(req,res);
})
routes.post("/cookie",(req,res)=>{
    cookieVerifyAuth(req,res)
})


export default routes;