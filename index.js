var fs = require("fs");
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "what is your project name?",
        name: "name"
    },
    {
        type: "input",
        message: "Why did you complete this project?",
        name: "purpose"
    },
    {
        type: "input",
        message: "describe the process of this project.",
        name: "process"
    },
    {
        type: "input",
        message: "what percentage of your project is HTML?",
        name: "html"
    },
    {
        type: "input",
        message: "what percentage of your project is CSS?",
        name: "css"
    },
    {
        type: "input",
        message: "what percentage of your project is JavaScript?",
        name: "javascript"
    },
    {
        type: "input",
        message: "what is the link for the github page?",
        name: "github"
    },
    {
        type: "input",
        message: "what is the link for the deployed page?",
        name: "deployed"
    },
    {
        type: "input",
        message: "please provide the relative path to an image.",
        name: "img"
    },
]).then(function(response) {
    console.log(response);
})