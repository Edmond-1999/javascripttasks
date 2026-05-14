const prompt = require("prompt-sync")();

let day = prompt("Which day is it today: ");

switch(day){
    case "Monday":
        console.log("Weekday");
        break;
    case "Tuesday":
        console.log("Weekday");
        break;
    case "Wednesday":
        console.log("Weekday");
        break;
    case "Thursday":
        console.log("Weekday");
        break;
    case "Friday":
        console.log("Weekday");
        break;
    case "Saturday":
        console.log("Weekend");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Rapture")

}
