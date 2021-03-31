const { program } = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const fetch = require("node-fetch");
const arrayPreguntas = require("./arrayPreguntas.js");
const paradas = require("./paradas.json");

const paradaSeleccionada = paradas.data.ibus;
console.log(paradaSeleccionada.line);

inquirer
  .prompt(arrayPreguntas)
  .then(respuesta => {
    if (respuesta.transporte === "bus") {
      console.log(chalk.yellow("No tenemos información dispoinible sobre los buses +info: https://www.tmb.cat/es/home"));
      process.exit(0);
    }
    if (respuesta.linea === paradaSeleccionada.line) {
      console.log(chalk[colorElegido]`
        Línea: ${paradaSeleccionada.line}.
        Destino: ${paradaSeleccionada.destination}.
        Tiempo de espera: ${paradaSeleccionada["t-in-min"]} min.`);
    } else if (respuesta.linea !== paradaSeleccionada.line && respuesta.info) {
      console.log(chalk.red.bold("No existe la línea."));
      process.exit(0);
    } else {
      process.exit(0);
    }
  });

program
  .option("-c, --color <color>")
  .option("-a, --abrev");
program.parse(process.argv);
const options = program.opts();
// la opción red será de momento el color por defecto
const colorElegido = `${options.color || "red"}`;
