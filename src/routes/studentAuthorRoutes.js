const express = require("express");
const studentauthorsRouter = express.Router();
function router(navs){

    var authors = [
        {
            author: "William Shakespeare",
            title: "English Poet",
            famousbook: "Macbeth",
            img: "william.jpg"
        },
        {
            author: "Arundhati Roy",
            title: "Indian Author",
            famousbook: "The God of Small Things",
            img: "Arundhati.jpg"
        },
        {
            author: "Lewis Carroll",
            title: "Writer",
            famousbook: "Alice's Adventures in Wonderland",
            img: "alice.jpg"
        },
        {
            author: "Kamala Suraiyya",
            title: "Indian Poet",
            famousbook: "Neermathalam Pootha Kalam",
            img: "Kamala.jpg"
        },
        {
            author: "Chetan Bhagat",
            title: "Indian Author",
            famousbook: "The 3 Mistakes of My Life",
            img: "Chetan.jpg"
        }

    ]
    studentauthorsRouter.get("/",function(req,res){
        res.render("studentAuthors",
        {
            navs,
            title:"Library",
            authors
        });
    });
    
    
    studentauthorsRouter.get("/:id", function(req,res){
        const id = req.params.id;
            res.render("studentAuthor",{
                navs,
                title:"Library",
                author:authors[id]
            });
    });

    return studentauthorsRouter;

}


module.exports = router;