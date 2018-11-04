const opts ={
    base:{
    alias:'b',
    number:true,
    required:true
},
limite:{
    alias:'l',
    default:10,
    number:true
}}

const argv = require("yargs")
    .command('Mostrar', "Muestra por pantalla la talba de base indicada",opts)
    .command("Guardar","Almacena el archivo con la tabla de la base especificada",opts)
    .help().argv;


module.exports = {
    argv
}