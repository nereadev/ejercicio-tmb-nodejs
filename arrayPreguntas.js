const arrayPreguntas = [
  {
    name: "transporte",
    type: "list",
    message: "¿Qué tipo de transporte quiere consultar?",
    choices: ["bus", "metro"]
  },
  {
    name: "metro",
    type: "checkbox",
    message: "¿Qué información extra quiere obtener de cada parada?",
    choices: ["Coordenadas", "Fecha de inauguración"],
    when: eleccion => eleccion.transporte === "metro"
  },
  {
    name: "info",
    type: "confirm",
    message: "¿Quiere que le informemos de los errores?",
    when: eleccion => eleccion.transporte === "metro" && eleccion.metro !== []
  },
  {
    name: "linea",
    type: "input",
    message: "¿Qué línea quiere consultar?",
    when: eleccion => eleccion.transporte === "metro" && eleccion.info !== ""
  }
];

module.exports = arrayPreguntas;
