import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/User.js';
import Task from './models/Task.js';
import { sequelize, testConnection } from './config/db.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello world !');
});

// app.use('/api/task', taskRouter)
app.use('/api/user', userRouter)

const startApp = async () => {
  await testConnection(); 
  await sequelize.sync({ alter: true });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startApp();