const { program } = require("commander");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "transporte",
      type: "list",
      message: "Qué tipo de transporte quiere consultar?",
      choices: ["bus", "metro"]
    }
  ])
  .then(respuesta => { console.log(respuesta); });

/* program
  .option("-t, --transporte <transporte>", "¿Qué tipo de transporte quiere consultar?");

program.parse(process.argv);

const options = program.opts();

if (options.transporte) {
  console.log("hola");
}
 */
