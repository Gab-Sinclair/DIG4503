const Express = require("express");
const App = Express();
const Port = 80;
const person = require("./person.js");


App.get("/name", function(request, response){
   Response.send(p.getName());
});

App.get("/", function(request, response){
   console.log("got a request");
   Response.send("Hi");
});


App.listen(port, function(){
    console.log("server running");
   } 
);


