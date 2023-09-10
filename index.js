import express from 'express'
import connectDB from './Database/db.js'
import userRoutes from './Router/userRoutes.js'
import dotenv from 'dotenv'


dotenv.config()
connectDB()
const app=express()
app.use(express.json())
app.use('/api/user',userRoutes)



const port=process.env.PRT || 5000
app.listen(port,()=>{ 
    console.log(`Sever is running  on port ${port}`)
}) 