import express from "express";
import ConnectDB from "./database.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';
import cors from 'cors'
import fs from 'fs';
import userRoutes from './Route/Route.js'


const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type", "Authorization"],
}));


app.use('/api/users', userRoutes);

// Database connection and server start
ConnectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    })
    
    
    app.get('/welcome',(req,res) => {
        res.send({
            "welcomsd":"sdsdsdsd"
        })
    })
        