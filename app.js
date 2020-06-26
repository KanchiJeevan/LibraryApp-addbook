const express = require("express");
const app = express();

const navbar = [
    {
        link:"/signup",name:"SignUp"
    },
    {
        link:"/loginStudent",name:"Student Login"
    },
    {
        link:"/loginAdmin",name:"Admin Login"
    }


];

const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    },
    {
        link:"/admin",name:"Add Book"
    },
    {
        link:"/addauthor",name:" Add author"
    },
    {
        link:"/",name:"Logout"
    }

];

const navs = [
    {
        link:"/studentBooks",name:"Books"
    },
    {
        link:"/studentAuthors",name:"Authors"
    },
    {
        link:"/",name:"Logout"
    }

];

//index page
const signupRouter = require('./src/routes/signupRoutes')(navbar);
app.use(express.urlencoded({extended:true})); 
app.use('/signup',signupRouter);

const loginstudentRouter = require('./src/routes/loginStudentRoutes')(navbar);
app.use('/loginStudent',loginstudentRouter);

const loginadminRouter = require('./src/routes/loginAdminRoutes')(navbar);
app.use('/loginAdmin',loginadminRouter);

//student page
const studentmainRouter = require('./src/routes/studentMainRoutes')(navs);
app.use('/studentMain',studentmainRouter);

const studentbooksRouter = require('./src/routes/studentBookRoutes')(navs);
app.use('/studentBooks',studentbooksRouter);

const studentauthorsRouter = require('./src/routes/studentAuthorRoutes')(navs);
app.use('/studentAuthors',studentauthorsRouter);

//admin page
const mainRouter = require('./src/routes/mainRoutes')(nav);
app.use('/main',mainRouter);

const booksRouter = require('./src/routes/bookRoutes')(nav);
app.use('/books',booksRouter);

const authorsRouter = require('./src/routes/authorRoutes')(nav);
app.use('/authors',authorsRouter);

//add book
const adminRouter = require('./src/routes/adminRoutes')(nav);
app.use(express.urlencoded({extended:true})); // applying the middleware function when using POST instead of GET
app.use('/admin',adminRouter);

//add author
const adminAuthorRouter = require('./src/routes/adminAuthorRoutes')(nav);
app.use(express.urlencoded({extended:true})); // applying the middleware function when using POST instead of GET
app.use('/addauthor',adminAuthorRouter);



app.use(express.static("./public"));
app.set('view engine' , 'ejs');
app.set('views' , './src/views');

app.get("/",function(req,res){
    res.render("index", 
    {
       navbar, 
        title:"Library"
    });
});

app.get("/main",function(req,res){
    res.render("main", 
    {
       nav, 
        title:"Library"
    });
});
app.get("/studentMain",function(req,res){
    res.render("studentMain", 
    {
       navs, 
        title:"Library"
    });
});


app.listen(5000);  