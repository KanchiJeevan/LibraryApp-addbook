const express = require("express");
const loginstudentRouter = express.Router();
function router(navbar){
    
    loginstudentRouter.get("/",function(req,res){
        res.render("loginStudent",
        {
            navbar,
            title:"Library",
            link:"/studentMain"
            
            
        });
    });

    
    return loginstudentRouter;

    
}


module.exports = router;