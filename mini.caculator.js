import readline from "readline"

function plus(operator,num1,num2) {
    if (operator === "+") {
        return num1 + num2
    } 
    else if (operator === "-") {
        return num1 - num2
    }
    else if (operator === "x") {
        return num1 * num2
    }
    else if (operator === "/") { 
        return num1/num2;
    }
    else {
        return "error";
    }
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("what is your operator: ",function(operator){
    rl.question("What is your first number: ",function(num1){
        rl.question("What is your second number: ",function(num2){
            
            const result = plus(operator,Number(num1),Number(num2))

            console.log(result)

            rl.close()   
             
        })
    })
});