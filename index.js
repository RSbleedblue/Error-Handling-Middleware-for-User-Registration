import express, { json } from 'express';
import userRouter from './Routes/userRoutes.js';
import { errorHandler } from './Middleware/customeErrorHandler.js';

const app = express();
app.use(json());
app.use(errorHandler);;
app.use("/api",userRouter)
export default app;