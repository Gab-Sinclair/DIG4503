const Express = require("express");
const App = Express();
const port = 80;



App.get("/", function(req, res){
    console.log("Got a request");
    res.send("");
 });

App.listen(port, function(){
    console.log("server running");
   } 

);