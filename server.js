const express = require ("express")
const app = express ()
const mangoose = require ("mongoose")
const bodyParser = require ("body-parser")

//configure what we have created
app.use(bodyParser.urlencoded({extended:true}));

//connecting to the database
mangoose.connect("mongodb+srv://JOANITA:WoebXeNVeVEzZ8DL@ablestatecohort1.hx7bi.mongodb.net/Forms")

//checking our express server
app.get("/", function(req, res){
    res.send ("express is working")
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})