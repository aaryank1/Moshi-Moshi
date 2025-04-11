import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import authRouter from './routes/auth.route.js';
import messageRouter from './routes/message.route.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.json({limit: '100mb'}));
// app.use(express.urlencoded({limit: '100mb', extended: true}))
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/auth", authRouter);
app.use("/message", messageRouter);

app.listen(PORT, () => {
    console.log(`Server is Live on Port: ${PORT}`)
})