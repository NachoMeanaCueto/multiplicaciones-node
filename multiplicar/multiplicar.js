const fs = require('fs');


let generarDatos = (base, limite = 10) => {
    return new Promise((resolve,reject) =>
    {
        if(! Number(base))
        {
            reject(`La base ${base}, no es un número`);
            return;
        }
        if(! Number(limite))
        {
            reject(`El límite ${limite}, no es un número`);
            return;
        }

        let data = "";

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i} \n`;
        }
        resolve(data);
    });
}

module.exports.crearArchivo = (base, limite) => {
    return new Promise((resolve,reject) =>
    {
        let ruta = `./Resultados/Tabla-${base}.txt`;
        generarDatos(base, limite).then((result) => {
            fs.writeFile(ruta,result,(err)=>{
                if(err)
                    reject(err);
                else
                    resolve(`Tabla-${base}.txt`);
            })
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports.mostrarArchivo = (base, limite) => {
   return new Promise((resolve, reject) => {
       generarDatos(base, limite)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
   })
}