#! usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25 ;
        this.fuel = fuel;
    }
    fuelIncrease(){
        this.fuel = 100;
    }
}

class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25 ;
        this.fuel = fuel;
    }
}

let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Enter your name : "
});

let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    choices:["Skeleton","Assassin","Zombie"],
    message:"Select your Opponent : "
});

let p1 = new Player(player.name);
let o1 = new Player(opponent.select);

do{
    // Skeleton
    if(opponent.select == "Skeleton"){
        let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Select your opponent : ",
            choices:["Attack","Drink Portion","Run for Your Life.."]
        });
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random()*2);
            if(num > 0){
               p1.fuelDecrease();
               console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
               console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
               if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("You Lose,Better Luck Next Time.."));
                process.exit();
               }
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bold.green(`You Win`));
                    process.exit();
                }
            }
        }
        else if(ask.opt == "Drink Portion"){
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        else{
            console.log(chalk.red.bold.italic("You Lose,Better Luck Next Time.."));
            process.exit();
        }
    }
    // Assassin
    else if(opponent.select == "Assassin"){
        let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Select your opponent : ",
            choices:["Attack","Drink Portion","Run for Your Life.."]
        });
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random()*2);
            if(num > 0){
               p1.fuelDecrease();
               console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
               console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
               if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("You Lose,Better Luck Next Time.."));
                process.exit();
               }
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bold.green(`You Win`));
                    process.exit();
                }
            }
        }
        else if(ask.opt == "Drink Portion"){
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        else{
            console.log(chalk.red.bold.italic("You Lose,Better Luck Next Time.."));
            process.exit();
        }
    }
    // Zombie
    else{
        let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Select your opponent : ",
            choices:["Attack","Drink Portion","Run for Your Life.."]
        });
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random()*2);
            if(num > 0){
               p1.fuelDecrease();
               console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
               console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
               if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("You Lose,Better Luck Next Time.."));
                process.exit();
               }
            }
            if(num <= 0){
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bold.green(`You Win`));
                    process.exit();
                }
            }
        }
        else if(ask.opt == "Drink Portion"){
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
        }
        else{
            console.log(chalk.red.bold.italic("You Lose,Better Luck Next Time.."));
            process.exit();
        }
    }
}
while(true);
