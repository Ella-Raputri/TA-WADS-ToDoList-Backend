import express from 'express'
import { getCurrentUser, login, logout, register, updateCurrentUser } from '../controllers/userController.js';
import userAuth from '../middleware/userAuth.js';

const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/logout', userAuth, logout)

userRouter.get('/userData', userAuth, getCurrentUser)
userRouter.put('/updateUser', userAuth, updateCurrentUser)

export default userRouter