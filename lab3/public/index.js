const Express = require("express");
const App = Express();
const port = 80;
const Person = require("./person.js");

let p = new Person("Gabby","Green");

App.use(Express.static("static"));

App.get("/public", function(request, res){
   res.send(p.getName());
});

App.get("/", function(request, res){
   console.log("got a request");
   res.send("Hello, world!");
});


App.listen(port, function(){
    console.log("server running");
   } 
);


