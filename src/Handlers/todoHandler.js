import express from 'express';
import mongoose from 'mongoose';
import todoSchema from '../Schemas/todoSchema.js'

const Todo = new mongoose.model('Todo', todoSchema);
const router = express.Router();

router.post('/insert', async (req, res) => {
    try {
        const user = new Todo(req.body);
    await user.save((err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.status(200).send('data stored successfully')
        }
    })
    // await res.send(user)
    } catch (error) {
        console.log(error.message);
    }
})



export default router;