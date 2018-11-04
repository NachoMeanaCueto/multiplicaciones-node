const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./Config/yargs').argv;
const colors = require('colors');

let base = argv.base;
let limite = argv.limite;

switch(argv._[0]){
    case'Mostrar':
        multiplicar.mostrarArchivo(base, limite)
            .then((archivo) =>  console.log(colors.green(archivo)) ) 
            .catch((err) => console.log(colors.red(err)));
        break;
    case'Guardar':
        multiplicar.crearArchivo(base, limite) 
            .then((archivo) =>  console.log(`Archivo creado: ${archivo.green}`)) 
            .catch((err) => console.log(colors.red(err)));
        break;
    default: console.log(colors.red("Comando inválido"));
    break;
}


