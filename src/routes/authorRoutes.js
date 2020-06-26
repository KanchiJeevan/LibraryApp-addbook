const express = require("express");
const authorsRouter = express.Router();
const Authordata = require("../model/Authordata"); 
function router(nav){

    authorsRouter.get("/",function(req,res){
        //Code for displaying all the books from the DataBase inside our book page
        Authordata.find()            
        .then(function(authors){       
            res.render("authors",
            {
                nav,
                title:"Library",
                authors
            });

        })
       
    });
    
    
    authorsRouter.get("/:id", function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id : id})
        .then(function(author){
            res.render("author",{
                nav,
                title:"Library",
                author
            });

        })
            
    });

    authorsRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOneAndDelete({_id : id})
            .then(function(author){
                res.redirect('/authors');
                
            });
    });

    return authorsRouter;

}


module.exports = router;