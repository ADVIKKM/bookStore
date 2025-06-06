import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;
// connect to mongodb
try {
    mongoose.connect(URI)
    console.log("Connected to mongodb");
    
} catch (error) { 
    console.log("Error: ", error);
    
}

// defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
