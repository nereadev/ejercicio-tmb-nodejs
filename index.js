const { program } = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const fetch = require("node-fetch");
const arrayPreguntas = require("./arrayPreguntas.js");

inquirer
  .prompt(arrayPreguntas)
  .then(respuesta => {
    if (respuesta.transporte === "bus") {
      console.log(chalk.yellow("No tenemos información dispoinible sobre los buses +info: https://www.tmb.cat/es/home"));
      process.exit(0);
    }
    const informacionUsuario = respuesta;
    return informacionUsuario;
  });

program
  .option("-c, --color#548273 <color>")
  .option("-a, --abrev <abreviacion");
program.parse(process.argv);
const options = program.opts();
if (options.color) {
  console.log("color");
}
if (options.abrev) {
  console.log("abreviacion");
}
