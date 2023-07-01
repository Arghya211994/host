import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import path from "path"
dotenv.config()

connectDB()

const app = express()

app.get('/',(req,res) => {
    res.json("API IS WORKING PERFECTLY...")
})

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname)));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT = process.env.PORT || 8000

app.listen(PORT,() => {
    console.log(`Server is running in${process.env.NODE_DEV} on PORT:${process.env.PORT}`)
})