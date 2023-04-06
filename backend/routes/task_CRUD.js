
const router = require('express').Router();

require("dotenv").config();
const e = require('express');
const Task = require('../models/task');

router.get('/', (req, res) => {

    res.status(200).json({status: "success", msg: "This is task api."});
});



// get all tasks
router.get('/get', async (req, res) => {

    const compare = (a, b) => {
        return a.priority - b.priority;
    }


    try{
        const allTasks = await Task.find();

        let completedtask = [], cancelledTask = [], pendingTask = [];
        allTasks.forEach((e) => {
            if(e.completed) {
                completedtask.push(e);
            } else if(e.cancelled) {
                cancelledTask.push(e);
            } else {
                pendingTask.push(e);
            }
        })

        // sort based on priority 
        pendingTask.sort(compare);

        const finalList = [...pendingTask, ...cancelledTask, ...completedtask]

        res.status(200).json({status: 'successful', pending: pendingTask.length, msg: finalList});
    }
    catch(err){
        res.status(500).json({status: 'failed', msg: err});
    }
})


// add task
router.post('/add', async (req, res) => {

    try{

        const {task, priority, cancelled, completed} = req.body;
        if(!(task && priority)){
            return res.status(400).json({"status": "error", "msg": "All fields are required.."}); 
        }

        const newtask = new Task({
            task,
            priority,
            cancelled,
            completed
        })

        // save user in database..
        await newtask.save()

        res.status(201).json({status: 'successful', msg: newtask});
    }

    catch(err){

        res.status(500).json({status: 'failed', msg: err.message});
    }

})


// delete task..
router.delete('/delete/:id', async(req, res) => {

    try{
        const {id} = req.params;
        
        //find and delete
        const foundTask = await Task.findOneAndDelete({_id: id})

        if(!foundTask)
            return res.status(404).json({status: 'failed', msg: 'ID not found.'});


        res.status(200).json({status: 'successful', msg: foundTask});
    }
    catch(err){

        res.status(500).json({status: 'failed', msg: err});
    }
})


// patch the task
router.patch('/update/:id', async(req, res) => {

    try{
        const {id} = req.params;

        // find and update the task in the table
        const updatedTask = await Task.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
        })

        if(!updatedTask){
            return res.status(404).json({status: 'failed', msg: 'ID not found.'});
        }

        res.status(200).json({status: 'successful', msg: updatedTask});

    }
    catch {

        res.status(500).json({status: 'failed', msg: err});
    }

})


module.exports = router;

