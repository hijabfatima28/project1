import inquirer from "inquirer"

async function currencyConverter() {
    let currency = {
        USD: 1,
        INR: 84,
        PKR: 278
    }

    let answer: any = await inquirer.prompt([
        {
            name: "from",
            message: "Select the from currency:",
            type: "list",
            choices: ["USD", "INR", "PKR"]
        },
        {
            name: "to",
            message: "Select the to currency:",
            type: "list",
            choices: ["USD", "INR", "PKR"]
        },
        {
            name: "amount",
            message: "Enter the amount:",
            type: "number"
        }
    ])

    let fromAmount = currency[answer.from]
    let toAmount = currency[answer.to]
    let amount = answer.amount
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount

    console.log(`Converted amount from ${answer.from} to ${answer.to}: ${convertedAmount}`)
}

currencyConverter()



















])
