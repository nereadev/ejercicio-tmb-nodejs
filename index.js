const { program } = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "transporte",
      type: "list",
      message: "¿Qué tipo de transporte quiere consultar?",
      choices: ["bus", "metro"]
    }
  ])
  .then(respuesta => {
    if (respuesta.transporte === "bus") {
      console.log(chalk.yellow("No tenemos información dispoinible sobre los buses +info: https://www.tmb.cat/es/home"));
      process.exit(0);
    }
    if (respuesta.transporte === "metro") {
      inquirer.prompt([{
        name: "metro",
        type: "checkbox",
        message: "¿Qué información extra quiere obtener de cada parada?",
        choices: ["Coordenadas", "Fecha de inauguración"]
      }]);
    }
  });

/* program
  .option("-t, --transporte <transporte>", "¿Qué tipo de transporte quiere consultar?");

program.parse(process.argv);

const options = program.opts();

if (options.transporte) {
  console.log("hola");
}
 */
