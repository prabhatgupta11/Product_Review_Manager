const express=require("express")
const {connection}=require("./db");
const { route } = require("./routes/routes")
require("dotenv").config()
const app=express()
app.use(express.json())

//routes
app.use("/api",route)

app.listen(process.env.port, async()=>{
    try{
     await connection
     console.log("DB connected")
    }catch(err)
    {
        console.log(err.message)
    }

    console.log(`server is running at ${process.env.port}`)
})