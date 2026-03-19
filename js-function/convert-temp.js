import readline from "readline";
// import celsiusToFahrenheit from "celsiusToFahrenheit.js"

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; 
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Enter temperature:",function(tempInput){
    const temp = parseFloat(tempInput);
    rl.question("Enter unit (C or F):",function(unitInput){
        const unit = unitInput.trim().toUpperCase();

        let result;

        if (unit === "C") {
            result = celsiusToFahrenheit(temp);
            console.log(`${temp}C is ${result.toFixed(2)}F`);
        } 
        else if (unit === "F") {
            result = FahrenheitToCelsiusahrenheit(temp);
            console.log(`${temp}F is ${result.toFixed(2)}C`);
        }
        else {
            console.log(`Invalid Unit! Please enter C or F.`);
        }
        rl.close();
    });
});