const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    console.log(`Paso por aqui base: ${base} limite ${limite}`);
    console.log('=============================='.green);
    console.log(`Tabla de  ${base}`);
    console.log('=============================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.green);
    };
}

let saveFileTable = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let contenido = '';
        for (let i = 1; i <= limite; i++) {
            contenido += (`${base} * ${i} = ${base*i}\n`);
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${ base }.txt`);
        });
    });

}

module.exports = {
    saveFileTable,
    listarTabla
}