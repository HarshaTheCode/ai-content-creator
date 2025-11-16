import { Router } from 'express';
import { resumebuilder } from '../controllers/resume.controller.js';
import path from 'path';




const routes= Router();

const __dirname = import.meta.dirname;

routes.post("/create",(req,res)=>{
    // resumebuilder(req,res)


 const filepath=path.join(__dirname,'./test.txt')

    console.log("/create was runnings");
    res.sendFile(filepath)
    
})


export default routes;