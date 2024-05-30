//  usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000;

let mypin = 3455;

let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
);

if (pinAnswer.pin === mypin) {
    console.log("your pin is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "places selcet option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        }]);
    //  if user selcet withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"

            }]);
        if (amountAns.amount <= mybalance) {
            let balance = mybalance - amountAns.amount;
            console.log(`The remaining balanc is ${balance}`);
        }
        else {
            console.log(`you have Insuffcient balance`);
        }
    }
    // if user select fast cash
    else if (operationAns.operation === "fast cash") {
        let fastchashAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "list",
                    choices: ["1000", "3000", "5000", "15000"]


                }
            ]
        );
        if (fastchashAns.amount <= mybalance) {
            let balanc2 = mybalance - fastchashAns.amount;
            console.log(`the remaining balance is ${balanc2}`);
        }
        else {
            console.log(`you have insuffcient amount`);
        }

    }
    else if (operationAns.operation === "check balance") {
        console.log(mybalance);

    }


} else {
    console.log("your pin is wrong");



}