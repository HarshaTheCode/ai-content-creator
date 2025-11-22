
import path from 'path';
import resumemodel from '../models/resume.model.js';
import jwt from 'jsonwebtoken';
import usermodel from '../models/user.model.js';

async function TestResumeResponse(req, res) {
    

    const __dirname = import.meta.dirname;

    const filepath = path.join(__dirname, './test.txt')

    console.log("/create was runnings");

    const userId = req.cookies.Id
    console.log(userId);

    const saveresume = await resumemodel.create({
        latexContent: filepath,
        userId: userId
    })


// Insertion of the resume into the user data 
    const userToken = req.cookies.Token
if (!userToken) {
    console.log('no token was found');
    
}else{

    const tokenid = jwt.verify(userToken, process.env.JWT_SECRET)
    
    const resumeId=saveresume._id.toString();
        const filter = {email:tokenid.Email} ;
        const update = {$push:{GeneratedResumeIds:resumeId}}

        const InsertResumeToUser = await usermodel.findOneAndUpdate(filter,update);
        console.log(InsertResumeToUser);
        
        console.log('insertion was completed');
        
        res.sendFile(filepath);
    }

}
export default TestResumeResponse