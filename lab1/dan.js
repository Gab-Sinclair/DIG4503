const person = require("./person.js");

class Dan extends person{
    constructor(name, color,gender){
        super(name,color);
        this.gender = gender;
    }
}
module.exports = Dan;