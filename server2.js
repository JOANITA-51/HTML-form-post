//using the express module
const express = require ('express');
const app = express()
//Using our MangoDB module
const MongoClient = require ('mongodb').MongoClient
//Creating a connection string
const url = 'mongodb:/localhost/EmployeeDB';
//creating a variable which will be used in our application
var str = '';
//create a route for our application
app.route('/Employeeid').get (function(req, res){
    MongoClient.connect (url, function(err,db){
        console.log('connected')
        // get all records in the employee collection
        var cursor = db.collection('Employee').find();
        //iterate through each record
        cursor.each(function(err, item){
            //Put all the information in the str variable
            if(item != null){
                str = str + " Employee id " + item.Employeeid + "<br/>";
            }
        });
        //sending the content of the str variable to the web page
        res.send (str);
        db.close();
    });
});
//make our server application listen on port 3000
var server = app.listen(3000, function(){})