import express from 'express'
import { getCurrentUser, login, register, updateCurrentUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/userData', getCurrentUser)
userRouter.put('/updateUser', updateCurrentUser)

export default userRouter