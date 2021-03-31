const { program } = require("commander");

program
  .option("-t, --transporte <transporte>", "¿Qué tipo de transporte quiere consultar?");

program.parse(process.argv);

const options = program.opts();

if (options.transporte) {
  console.log("hola");
}
