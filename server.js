const simulacion = require("./index")

const express = require("express")

const cors = require("cors")

const path = require("path")

const app = express()

const PORT = 3000

//cors

app.use(cors())

//body-parser

app.use(express.json())

//middleware

app.use(express.static(path.join(__dirname,'client')))

app.post('/simulacion', (req,res)=>{

    res.json(simulacion(new Date(req.body.start),new Date(req.body.end)))
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'client/error.html'))
})

//port initialization

app.listen(PORT, ()=> console.log(`server started at port ${PORT}`)) 