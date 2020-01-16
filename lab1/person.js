 const chalk = require("chalk");

class person {
        constructor(name,color){
            this.name = name;
            this.color =color;
        }

        speak(){
            console.log(chalk.keyword(this.favoriteColor)(this.name));
        }
}
module.exports = person; 
