const express= require("express")
const bodyParser = require("body-parser")
const db=require("./db")
const PORT = 3000;

const app=express()
app.use(bodyParser.json());
const studentRoutes=require("./routes/studentRoutes")

app.get("/",(req,res)=>{
    res.send("Hello")

})
app.use("/student",studentRoutes)

app.listen(PORT, () => {
    console.log(`Server started at Port:${PORT}`);
})
