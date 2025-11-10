import express from 'express'
import { routes } from './routes/pathroutes.js'

const app = express()

app.use('/',routes)
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});