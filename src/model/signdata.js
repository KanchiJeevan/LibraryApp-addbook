//Accessing Mongoose Package
const mongoose = require("mongoose");

//DataBase Connection
mongoose.connect("mongodb://localhost:27017/library");

//Schema Definition
const Schema = mongoose.Schema;

const SignSchema = new Schema({
    studentORadmin : String,
    username : String,
    email : String,
    password : String,
    confirm_password : String,
    number:String
});

//Model Creation
var Signdata = mongoose.model("signdata",SignSchema);

module.exports = Signdata;