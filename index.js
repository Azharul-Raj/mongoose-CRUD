import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mongoose_crud')
    .then(() => {
    console.log('connected mongoDB');
    })
.catch(err=>console.log(err.message))