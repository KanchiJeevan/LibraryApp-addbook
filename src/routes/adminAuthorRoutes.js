const express = require("express");
const adminAuthorRouter = express.Router();
const Authordata = require("../model/Authordata");

function router(nav){
    adminAuthorRouter.get("/",function(req,res){
        res.render("addAuthor",{
            nav,
            title : "Library"
    
        });
    });

    adminAuthorRouter.post("/add",function(req,res){

        //Accessing the Query Parameter
        var item ={
            author : req.body.author,
            title : req.body.title,
            famousbook : req.body.famousbook,
            image : req.body.image
         }

         var author = Authordata(item);
         author.save();  //Saving to the DataBase
         res.redirect("/authors"); 
        

    });
     
    return adminAuthorRouter; 
}

module.exports = router;

