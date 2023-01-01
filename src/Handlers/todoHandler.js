import express from "express";
import mongoose from "mongoose";
import todoSchema from "../Schemas/todoSchema.js";

const Todo = new mongoose.model("Todo", todoSchema);
const router = express.Router();

router.post("/insert", async (req, res) => {
  const { name } = req.body;
  try {
    const isExist = await Todo.find({ name: name })
    if (isExist) {
      res.send('This name is already exist')
    }
    else {
      const user = new Todo(req.body);
    const result = await user.save();
    res.send('data stored successfully')
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.put('/update/:id', async (req, res) => {
    const {id }= req.params;
    const result =await Todo.findOneAndUpdate({ _id: id }, { isGood: true });
    await res.send(result);
})

router.get('/get', async (req, res) => {
    const data = await Todo.find().select({_id:0,__v:0,date:0});
    res.send(data);
})

router.get('/single', async (req, res) => {
    const {name} = req.query;
    const result = await Todo.find({ name: name })
    res.send(result)
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const result = await Todo.deleteOne({ _id: id });
    res.send(result);
})

export default router;
