const Express = require("express");
const App = Express();
const port = 80;

//request id from id file 
App.use("/id/#id", Express.static(""));
     //send json object with matching id  



//request name from name file  
App.use("/name/#name", Express.static(""));
    //send json object qith matching name

    

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