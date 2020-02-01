const Express = require("express");
const App = Express();
const port = 80;

App.use("/public",Express.static("public"));

App.get("/", function(request, res){
   console.log("got a request");
   res.send("Hello, world!");
});

App.listen(port, function(){
    console.log("server running");
   } 
);


