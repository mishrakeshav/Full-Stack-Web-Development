//starter code
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var items = ["Buy food", "Cook food", "Eat food"];
var workItems = [];
var tostudy = [];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req,res)=>{
    var today = new Date(); 
    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    var day = today.toLocaleDateString("en-US", options);
    
    res.render("list", {listTitle:day, items:items});
});

app.post("/", (req,res)=>{
    let item = req.body.newItem;
    if(req.body.button === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else if(req.body.button==="Studies"){
        tostudy.push(item);
        console.log(tostudy);
        res.redirect("/studies");
    }
    else{
        items.push(req.body.newItem);
        res.redirect("/");
    }
    
});
app.get("/work", (req,res)=>{
    res.render("list", {listTitle:"Work", items:workItems});
});

app.get("/studies", (req,res)=>{
    res.render("list", {listTitle:"Studies", items:tostudy});
});





app.listen(3000, (req,res)=>{
    console.log("Server started on port 3000"); 
});