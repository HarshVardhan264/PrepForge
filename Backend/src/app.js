const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')
/*
 * require all the routes here
 */
const authRouter = require('./routes/auth.routes');
const interviewRouter = require('./routes/interview.routes');



const app = express();
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/interview', interviewRouter);

module.exports = app;