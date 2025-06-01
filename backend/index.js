import express from 'express'
import userRoutes from './routes/user.route.js'
import connectDB from './utils/connectDB.js'
import boardRoutes from './routes/board.route.js'
import commentRoutes from './routes/comment.route.js'
import pinRoutes from './routes/pin.route.js'
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors({origin: process.env.CLIENT_URL}))
app.use("/users", userRoutes)
app.use("/pins", pinRoutes)
app.use("/boards", boardRoutes)

app.use("/comments", commentRoutes)

app.listen(8000, () => {
  connectDB()
  console.log("Server listen add port 8000");
  
})