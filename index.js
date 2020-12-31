var fs = require("fs");
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "what is your name?",
        name: "name"
    }
]).then(function(response) {
    console.log("Hello " + response.name + "!");
})