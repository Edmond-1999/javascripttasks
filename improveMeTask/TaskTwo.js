let age = 18;

function ageChecker(age){
    if(age <= 12){
        return "Child";
    }
    else if(age > 12 && age < 18){
        return "Teenager";
    }
    else{
        return "Adult";
    }

}

console.log(ageChecker(age))
