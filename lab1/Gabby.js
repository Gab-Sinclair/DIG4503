const person = require("./person.js");

class Gabby extends person{
    constructor(name, favoriteColor){
        super(name, favoriteColor);
    }
}
module.exports = Gabby;