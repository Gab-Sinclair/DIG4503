const person = require("./person.js");

class Gabby extends person{
    constructor(name, color,gender){
        super(name,color);
        this.gender = gender;
    }
}
module.exports = Gabby;