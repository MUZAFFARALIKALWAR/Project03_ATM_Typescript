#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

 let myBalance:number = 10000;
 let myPin:number = 5566

   console.log(chalk.yellowBright("Muzaffar Ali kalwar! wellcome back to HBL pakistan"));
  
   
   
   let pincodeAns = await inquirer.prompt
  (
    [
      { 
        message:chalk.green("Enter yor pincode :"),
        type:"number",
        name:"pin",
      },
    ]
  );
   if(pincodeAns.pin === myPin){
 console.log(chalk.yellowBright("correct pincode login succesfully"));
       
         let operationAns = await inquirer.prompt
        (
           [
             {    
                name:"operator",
                message:chalk.green`please select option`,
                type:"list",
                choices:["withdraw","fastcash","check balance"]
             },
          ]
        );
       
  if(operationAns.operator === "withdraw"){
         let amountAns = await inquirer.prompt
        (
          [
            {
                name:"amount",
                type:"number",
                message:(chalk.yellowBright(" please Enter amount")),

            },
          ]
        );
        if(amountAns.amount <= myBalance){
           myBalance -= amountAns.amount
 console.log(chalk.greenBright("transaction succesfully ATM HBL Pakistan...\n Your remaning balance is"), myBalance);

           }else if(amountAns.amount > myBalance){
     console.log(chalk.red("unsunficient your balance"));
            
    };
       }else if(operationAns.operator === "fastcash"){
         let fastcashAns = await inquirer.prompt
        (
          [
            {
                message:chalk.magentaBright("please select one option and receive fastcash "),
                name:"fast",
                type:"list",
                choices:["1000","2000","5000","10000"]

            },
          ]
        );
         if(fastcashAns.fast === "1000"){
            myBalance -= fastcashAns.fast
console.log(chalk.greenBright(`transaction succesfully ATM HBL Pakistan \n Your remaning balance is $${myBalance}`))
         }else if(fastcashAns.fast === "2000"){
            myBalance -= fastcashAns.fast
console.log(chalk.greenBright(`transaction succesfully ATM HBL Pakistan \n Your remaning balance is $${myBalance}`))
         }else if(fastcashAns.fast === "5000"){
            myBalance -= fastcashAns.fast
console.log(chalk.greenBright(`transaction succesfully ATM HBL Pakistan \n Your remaning balance is $${myBalance}`))
         }else if(fastcashAns.fast === "10000"){
            myBalance -= fastcashAns.fast
console.log(chalk.greenBright(`transaction succesfully ATM HBL Pakistan \n Your remaning balance is $${myBalance}`))
         };
       }else if(operationAns.operator === "check balance"){
console.log(chalk.greenBright(`Your currunt balance is ${myBalance} `));
        
        
       }
 }else{
    console.log(chalk.red("incorrect pin number"));
    
 }