//Accessing Mongoose Package
const mongoose = require("mongoose");

//DataBase Connection
mongoose.connect("mongodb://localhost:27017/library");

//Schema Definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author : String,
    title : String,
    famousbook : String,
    image : String
});

//Model Creation
var Authordata = mongoose.model("authordata",AuthorSchema);

module.exports = Authordata;