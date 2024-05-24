import express from 'express';
import dotenv from 'dotenv';
import register from './api/register.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api', register);


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});