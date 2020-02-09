const Express = require("express");
const App = Express();
const port = 80;
const Poke = require("./poke.js")
const pokemon = require('pokemon');

//loop through list of pokemon
for(let i=0; i<812; i++){
    let names = pokemon.getName();
    let ids = pokemon.getId();
        pokemon.push(new Poke(id, name));
}
result ; 

//request id from name file 
App.get("name/:name" , (req, res) => {
     //find json object with matching name 
     pokemon.forEach((value)=> {
        if(value.names == req.params.name) {
            result = value; 
        }
    });

//request name from id file  
App.get("id/:id", (req, res) => {
    //send json object with matching id
    pokemon.forEach((value)=> {
        if(value.ids == req.params.id) {
            result = value;
        }
    });


    //print path to console 
	if(result.error){
          //error paths print to console in red
		console.log(chalk.red.path);
    }
	else{
         //correct paths print to console in green
		console.log(chalk.green.path);
        res.send(result);
    }

});
 
});


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