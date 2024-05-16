#! /usr/bin/env node

import inquirer from "inquirer"

const words:{
    sentence:string
} = await inquirer.prompt([{
    name:'sentence',
    type:'input',
    message:"please enter your sentence"
}])
 
const wordscount = words.sentence.trim().split(" ")
console.log(wordscount)
console.log(`you words count is ${wordscount.length}`);
