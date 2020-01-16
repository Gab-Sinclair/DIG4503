const person = require("./person.js");

class Gabby extends person{
    constructor(name, color){
        super(name,color);
    }
}
module.exports = Gabby;