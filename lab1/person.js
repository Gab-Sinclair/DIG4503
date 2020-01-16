 const chalk = require("chalk");

class person {
        constructor(name, favoriteColor){
            this.name = name;
            this.favoriteColor = favoriteColor;
        }

        speak(){
            console.log(chalk.keyword(this.favoriteColor)(this.name));
        }
}
module.exports = person; 
