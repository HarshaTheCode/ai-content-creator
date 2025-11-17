import { Router } from 'express';
import { userAuth } from '../auth/user.auth.js';




const routes= Router();

routes.post("/",(req,res)=>{
    

    userAuth(req,res);

    
})


export default routes;