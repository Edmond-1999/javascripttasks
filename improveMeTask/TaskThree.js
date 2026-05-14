const prompt = require("prompt-sync")();

let username = prompt("Enter your username: ");
let password = prompt("Enter your password: ")

let correctUsername = "Edmond";
let correctPassword = "edmond1234";

function login(username, password){
    if(username == correctUsername && password == correctPassword){
        return "Login Complete";
    }
    else{
        return "Wrong username or password";
    }
}

console.log(login(username, password));
