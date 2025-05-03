import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/taskController.js';
import userAuth from '../middleware/userAuth.js';

const taskRouter = express.Router();

taskRouter.post('/createTask', userAuth, createTask)
taskRouter.get('/getTasks', userAuth, getTasks)
taskRouter.put('/updateTask/:id', userAuth, updateTask)
taskRouter.delete('/deleteTask/:id', userAuth, deleteTask)

export default taskRouter