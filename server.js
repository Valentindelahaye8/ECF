const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req, res){
    res.send("express is working")
})

app.listen("5500", function(){
    console.log("server is running on 5500");
})