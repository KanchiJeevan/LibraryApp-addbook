const express = require("express");
const signupRouter = express.Router();
const Signdata = require("../model/Signdata");
function router(navbar){

    signupRouter.get("/",function(req,res){
        res.render("signup",
        {
            navbar,
            title:"Library",
            link:"/"
            
        });
    });

    signupRouter.post("/signadd",function(req,res){
        var item ={
            studentORadmin : req.body.studentORadmin,
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            confirm_password : req.body.confirm_password,
            number : req.body.number
         }

         var sign = Signdata(item);
         sign.save();  //Saving to the DataBase
         res.redirect("/"); 

    });
    

    return signupRouter;

}


module.exports = router;