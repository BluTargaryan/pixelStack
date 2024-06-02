import express from 'express';
import dotenv from 'dotenv';
import register from './api/auth/register.js';
import login from './api/auth/login.js';
import profile from './api/auth/profile.js';
import logout from './api/auth/logout.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/auth', register);
app.use('/api/auth', login);
app.use('/api/auth', profile);
app.use('/api/auth', logout);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.log('Error connecting to MongoDB', error.message);
    });


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});