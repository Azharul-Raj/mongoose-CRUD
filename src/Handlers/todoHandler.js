import express from "express";
import mongoose from "mongoose";
import todoSchema from "../Schemas/todoSchema.js";

const Todo = new mongoose.model("Todo", todoSchema);
const router = express.Router();

router.post("/insert", async (req, res) => {
  try {
    const user = new Todo(req.body);
    const result = await user.save((err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.send("data stored successfully");
      }
    });
    // await res.send(user)
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
    const data = await Todo.find({name:'rokib',roll:13,isGood:false});
    res.send(data);
})

router.get('/single', async (req, res) => {
    const {name} = req.query;
    const result = await Todo.find({ name: name })
    res.send(result)
})

export default router;
