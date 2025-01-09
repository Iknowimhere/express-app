import db from "./config/db.js";
import express from "express";
import todoRoutes from "./routes/todoRoutes.js";

//db connection
db();

let app=express();

//middleware
app.use(express.json());

app.use(todoRoutes);

export default app;