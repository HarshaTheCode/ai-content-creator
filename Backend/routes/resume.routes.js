import { Router } from 'express';
import { resumebuilder } from '../controllers/resume.controller.js';
import path from 'path';
//test resume import 
import TestResumeResponse from './testresume.js';
import { getResumesForUser } from '../controllers/Get-Resume.controller.js';




const routes= Router();


routes.post("/:id/create",async(req,res)=>{
    // resumebuilder(req,res)
    TestResumeResponse(req,res);
})

routes.post("/getresumes",async(req,res)=>{
    getResumesForUser(req,res);
})



export default routes;