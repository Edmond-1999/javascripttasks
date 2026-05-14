const car = { brand: "Toyota", model: "Camry", available: true };

function checkAvailability(car) {
    if (car.available) {
        return "This car is available";
    }
}

console.log(checkAvailability(car));

