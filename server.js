const express = require ("express")
const app = express ()
const mongoose = require ("mongoose")
const bodyParser = require ("body-parser")

//configure what we have created
app.use(bodyParser.urlencoded({extended:true}));

//connecting to the database
mongoose.connect("mongodb+srv://JOANITA:WoebXeNVeVEzZ8DL@ablestatecohort1.hx7bi.mongodb.net/Forms")

//creating a data schema :an abstract design that represents the storage of the data in a database.
const notesSchema = {
    title: String,
    content: String
}

//creating a model :abstract model that organizes elements of data
const note = mongoose.model("Note", notesSchema)

//checking our express server
app.get("/", function(req, res){
    res.file (_dirname + "/index.html");
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})