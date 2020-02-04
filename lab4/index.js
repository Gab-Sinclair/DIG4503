const Express = require("express");
const App = Express();
const port = 80;

//request id from id file send id 
App.use("/id/#id", Express.static(""));

//request name from name file send name file 
App.use("/name/#name", Express.static(""));
  

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