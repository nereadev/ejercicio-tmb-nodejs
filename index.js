const { program } = require("commander");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "transporte",
      type: "string",
      message: "Qué tipo de transporte quiere consultar?"
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
