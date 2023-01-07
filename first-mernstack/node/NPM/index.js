import chalk from "chalk";
import validator from "validator";

console.log(chalk.yellow.inverse("Welcome  "));
const res = validator.isEmail("foobar.com"); //=> true
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); //=> true)
