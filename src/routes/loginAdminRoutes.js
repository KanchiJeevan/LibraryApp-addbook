const express = require("express");
const loginadminRouter = express.Router();
function router(navbar){
    
    loginadminRouter.get("/",function(req,res){
        res.render("loginAdmin",
        {
            navbar,
            title:"Library",
            link:"/main"
            
        });
    });

    
    return loginadminRouter;

    
}


module.exports = router;