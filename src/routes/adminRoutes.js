const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../model/Bookdata");

function router(nav){
    adminRouter.get("/",function(req,res){
        res.render("addBook",{
            nav,
            title : "Library"
    
        });
    });

    adminRouter.post("/add",function(req,res){

        //Accessing the Query Parameter
        var item ={
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.body.image
         }

         var book = Bookdata(item);
         book.save();  //Saving to the DataBase
         res.redirect("/books"); 
        

    });


    //edit
    adminRouter.post('/edit/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
            .then(function(book){
                    if (!book){
                        return next(new Error('cant load'));
                    }
                    else {
                        var itemedit = {
                            title: req.body.title,
                            author: req.body.author,
                            genre:  req.body.genre,
                            image:  req.body.image
                        }
                        var bookedit = Bookdata(itemedit);
                        bookedit.save();
                        Bookdata.findByIdAndUpdate(id,itemedit,(er,book1) => {
                            res.redirect('/books/'+book1._id);
                        });
                    }
            });
    });
    
     
    return adminRouter; 
}

module.exports = router;

