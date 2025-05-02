import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.post('/createTask', createTask)
taskRouter.get('/getTasks', getTasks)
taskRouter.put('/updateTask/:id', updateTask)
taskRouter.delete('/deleteTask/:id', deleteTask)

export default taskRouter