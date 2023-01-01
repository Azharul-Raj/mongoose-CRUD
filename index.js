import express from 'express';
import mongoose from 'mongoose';
import todoHandler from './src/Handlers/todoHandler.js'


const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and running`);
})

app.get('/', (req, res) => {
    res.send(`GOOD DAY`)
})

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mongoose_crud')
    .then(() => {
    console.log('connected mongoDB');
    })
    .catch(err => console.log(err.message))

app.use('/',todoHandler)