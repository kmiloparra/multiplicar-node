const argv = require('./config/yargs.js').argv;
const { saveFileTable, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');

let crearArchivo = async(base, limite) => {
    let result = await saveFileTable(base, limite);
    return `Archivo creado:`.blue + `${result}`.green;
}

console.log(argv.base);
let comando = argv._[0];

switch (comando) {

    case 'listar':

        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        console.log(`limite: ${argv.limite}`);
        crearArchivo(argv.base, argv.limite)
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        break;
    default:
        console.log('Comndo no reconocido');
        break;
}