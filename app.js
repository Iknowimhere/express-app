import express from "express";

//top level function call  express app object
let app=express();


app.use("/home",function(req,res,next){
    console.log("parse");
    next()
});
app.use("/home",function auth(req,res,next){
    console.log("auth");
    next()
}
);

app.get("/home",(req,res,next)=>{
    res.send("home page");
});


app.get("/about",(req,res,next)=>{
    res.send("about page");
});

export default app;