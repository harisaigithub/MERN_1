const mongoose= require("mongoose");
const studSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address :{
        type:string,
        required:true
    }
});
const students=new mongoose.model("students",studSchema);
module.exports=students;