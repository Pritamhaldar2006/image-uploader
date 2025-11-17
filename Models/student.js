const mongoose=require("mongoose")
// const { type } = require("os")


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:false,
    },
    address:{
        type:String,
        required:false,
    },
    photo:{type:String} // Store base64 encoded
    
});

const Student=mongoose.model("Student",studentSchema)

module.exports=Student;