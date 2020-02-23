const Express = require("express");
const App = Express();
const port = 80;
const pokemon = require('json-pokemon');
const chalk = require("chalk");
const cors = require("cors");

App.use(cors());
App.use("/",Express.static("client/build"));

//find id in pokemon array
App.get("/pokemon/id/:id", function(req, res){
    let result = {"error":"404 thing not found"};

    pokemon.forEach((value)=>{
        if(value.id == req.params.id){
            result = value;
        }

    });
    if(result.error){
        console.log(chalk.red(req.path));
        res.json(result);

     }
     else{
        console.log(chalk.green(req.path));
         res.json(result);
        }
});



//find name in pokemon array
App.get("/pokemon/name/:name", function(req, res){
    let result = {"error":"404 thing not found"};
    
    pokemon.forEach((value)=>{
        if(value.name == req.params.name){
            result = value;
        }
    });
   
    if(result.error){
        console.log(chalk.red(req.path));
         res.json(result);
     }
     else{
        console.log(chalk.green(req.path));
         res.json(result);
        }
});


//console log when request is made on the server 
App.get("/", function(req, res){
    console.log("Got a request");
    res.json();
 });


 //listen on port 80 
App.listen(port, function(){
    console.log("server running");
   } 

);