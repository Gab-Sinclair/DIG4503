const Express = require("express");
const App = Express();
const port = 80;
const Person = require("./person.js")
const faker = require('faker');



let people =[];
for(let i=0; i<87; i++){
    let randomName = faker.name.findName();
    let randomColor = faker.commerce.color();
        people.push(new Person(randomName, randomColor));
}


//request id from id file 
App.get("/people/name/:name", (req,res)=>{
    for(i=0; i< people.length; i++){
        if(req.paramas.name == people[i].name) { // checking if req path name matches name in array 
            res.send(people[i]);
        } 
    }
    res.send("invalid");
 });

App.get("/people/color/:color", (req,res)=>{
    for(i=0; i< people.length; i++){
        if(req.paramas.color == people[i].color) { // checking if req path name matches name in array 
            res.send(people[i]);
        } 
    }
    res.send("invalid");
});


     //send json object with matching id  
     //show error if id does not exist


//request name from name file  
//App.use("/name/#name", Express.static(""));
    //send json object qith matching name
    //show error is name does not exit


//print path to console 
   //decide if path is correct or incorrect
      //routes that are requested print to console in green with chalk
     //error paths print to console in red




//console log when request is made on the server 
App.get("/", function(req, res){
    console.log("Got a request");
    res.send("");
 });

 //listen on port 80 
App.listen(port, function(){
    console.log("server running");
   } 

);