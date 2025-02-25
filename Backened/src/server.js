import dotenv from 'dotenv'
dotenv.config({
  path: './.env'
});

import express from "express";
import cors from "cors";
import connectDB from "./db/dbConnect.js";
import contactRoutes from './routes/contactRoute.js'; 


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); 
app.use(express.json());


// Routes
app.use('/api', contactRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Server!");
});


//connect to db and start server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on port number ${port}`);
      console.log("MongoDB connected successfully!");
    });
  })
  .catch((error) => {
    console.error("MongoDB not connected successfully:", error.message);
  });
