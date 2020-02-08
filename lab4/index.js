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
App.get();
     //send json object with matching id  
     //show error if id does not exist


//request name from name file  
App.get("pokemon/:name", (req, es) => {
    //send json object with matching name
    people.forEach((value)=> {
        if(value.color == req.params.color) {
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
    res.send("result!");
    }

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