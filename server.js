const express = require ("express")
const app = express ()
const mongoose = require ("mongoose")
const bodyParser = require ("body-parser");
const { request } = require("http");

//configure what we have created
app.use(bodyParser.urlencoded({extended:true}));

//connecting to the database
mongoose.connect("mongodb+srv://JOANITA:WoebXeNVeVEzZ8DL@ablestatecohort1.hx7bi.mongodb.net/notesDB")

//creating a data schema :an abstract design that represents the storage of the data in a database.
const notesSchema = {
    title: String,
    content: String
}

//creating a model :abstract model that organizes elements of data
const note = mongoose.model("Note", notesSchema)

//getting from our express server
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

//taking in the data from the form that has been referenced by the names
app.post ("/", function(req, res){
    let newNote = new note ({
        title: req.body.title,
        content:req.body.content
    });
    newNote.save();
    //to prevent the over loading 
    res.redirect("/")
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})