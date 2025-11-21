import { configDotenv } from 'dotenv'
configDotenv();

import express, { json } from 'express'
import { connectdb } from './Database/dbconnect.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import resumeroutes from './routes/resume.routes.js';
import userRoutes from './routes/user.routes.js'
import authroutes from './routes/Auth.routes.js';
import Homeroutes from './routes/Home.routes.js';



const app = express()
connectdb();
app.use(express.json());
app.use(cors())
app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));



app.use('/',Homeroutes)
app.use('/user',userRoutes)
app.use('/api',resumeroutes);
app.use('/auth',authroutes)

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});