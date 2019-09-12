const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime la tabla de multiplicar', opts)
    .command('crear', 'imprime la tabla de multiplicaren arhivo', opts)
    .help()
    .argv;


module.exports = {
    argv
}