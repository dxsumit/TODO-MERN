
const mongoose = require("mongoose");

// create schema
const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "task can not be empty."],
        maxlength: [100, "task is more than 150 characters."],
        trim: true
    },
    priority: {
        type: Number,
        min: 1, 
        max: 9,
        required: true
    },
    cancelled: {
        type: Boolean,
        default: false,
        required: [true, "cancelled can not be empty."],
    },
    completed: {
        type: Boolean,
        default: false,
        required: [true, "completed can not be empty."],
    }
}) 



module.exports = mongoose.model('Task', TaskSchema);
