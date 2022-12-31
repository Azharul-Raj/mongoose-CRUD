import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    roll: {
        type: Number,
        required:true,
    },
    isGood: {
        type: Boolean,
        required:true
    },
    date: {
        type: Date,
        default:Date.UTC()
    }
})