const Express = require("express");
const App = Express();
const port = 80;
const pokemon = require('json-pokemon');
const chalk = require("chalk");

let result = {"error":"404 thing not found"};



//find id in pokemon array
App.get("/id/:id", function(req, res){
    pokemon.forEach((value)=>{
        if(value.id ==req.params.id){
            result = value;
        }
    });
        if(result.error){
            console.log(chalk.red(req.path));
        }

        else{
            console.log(chalk.green(req.path));
            res.send(result);
        }
});



//find name in pokemon array
App.get("/name/:name", function(req, res){
    pokemon.forEach((value)=>{
        if(value.name ==req.params.name){
            result = value;
        }
    });

        if(result.error){
            console.log(chalk.red(req.path));
        }

        else{
            console.log(chalk.green(req.path));
            res.send(result);
        }

        });


//console log when request is made on the server 
App.get("/", function(req, res){
    console.log("Got a request");
    console.log(chalk.green(req.path));
    res.send("");
 });


 //listen on port 80 
App.listen(port, function(){
    console.log("server running");
   } 

);