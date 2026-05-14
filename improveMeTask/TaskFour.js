let number = -20;

function numberChecker(number){
    if(number > 0){
        return "Number Is positive";
    }
    else if(number < 0){
        return "Number is negative";
    }
    else{
        return "Number is zero";
    }

}

console.log(numberChecker(number));
