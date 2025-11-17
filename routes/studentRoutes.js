const express = require("express")
const router = express.Router()
const Student = require("../Models/student")
const multer = require("multer")
// const mongoose = require("mongoose")

// const Storage=multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,"uploads/")
//     },
//     filename:(req,file,callback)=>{
//         const suffix=Date.now();
//         callback(null,suffix+"-"+file.originalname);
//     }
// })

//Configure multer to store files in memory as buffer

const storage = multer.memoryStorage()

const upload = multer({ storage })
router.post("/create", upload.single("photo"), async (req, res) => {
    try {
        const { name, age, email, phone, address } = req.body;
        // const photoPath=req.file? req.file.path:null;
        const photoBase64 = req.file ? req.file.buffer.toString("base64") : null

        const newStudent = new Student({ name, age, email, phone, address, photo: photoBase64 });
        await newStudent.save();

        res.status(201).json({ message: "Student created successfully", student: newStudent })
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
})

module.exports = router