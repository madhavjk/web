var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");

});

app.get("/campgrounds",function(req,res){
    var campgrounds =[
        {name: "salman creek",image:"https://farm9.staticflicker.com/8842/796274612_bf2baf67c0.jpg"},
        {name: "Granite",image:"https://farm1.staticflicker.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest",image:"https://farm7.staticflicker.com/6057/6234565071_4d20668bbd.jpg"}
    ]
    res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds",function(req,res){
    res.send("YOU HIT")
 
});
app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
    
});
app.listen(process.env.PORT||3000 ,process.env.IP,function(){
    console.log("The Yelpcamp Server");
});
