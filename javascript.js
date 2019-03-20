var moment = require('moment');
moment().format();
const chalk = require('chalk');
 
var dayOfWeek= moment().format("dddd");
var hour=moment().format("HH");

console.log(chalk.underline(chalk.green(dayOfWeek)));
//console.log(hour);
if (hour<5 && hour >=12){
    console.log(chalk.orange("Good Afternoon"));
}else if(hour <12){
    console.log(chalk.red("Good Morning"));
}else{
    console.log(chalk.cyan("Good Evening"));
}