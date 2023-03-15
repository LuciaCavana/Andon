const readline = require('readline');
const fs = require('fs');
const filename = 'C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Desarrollo/File/FileNumLine.txt';

function GuardarLinea(nNum){
    const fs = require('fs');
    const data = nNum;

    fs.writeFile(filename, data.toString(), { flag: 'w' }, function (err) {
    if (err) {
        console.error(err);
    }
    });

}

function getFirstLineAsNumber() {
    const data = fs.readFileSync(filename, 'utf-8').split('\n')[0];
    const number = Number(data);
    return number;
}

function prueba(dLine){
    
    const filename = 'C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Desarrollo/File/Prueba.txt';
    console.log(dLine)
    dato =  JSON.stringify(dLine)

    const fs = require('fs');
    
    fs.appendFileSync(filename, dato+'\n',function(err) {
        if (err) {
            console.error(err);
        }
    });

}

function prueba2(fecha){
    
    const filename = 'C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Desarrollo/File/Prueba.txt';

    const fs = require('fs');

    // Leer el contenido del archivo
    const contenido = fs.readFileSync(filename, 'utf-8');
    
    // Convertir el contenido a un array en JavaScript
    const filas = contenido.split('\n');
    const datos = filas.map(fila => {
        try{
            console.log(fila)
            return JSON.parse(fila);
        }
        catch(err){
            console.log(fila)
        }
    });
    console.log(datos)
    // Buscar el número relacionado con una fecha dada
    const numeroBuscado = datos.find(dato => dato.hasOwnProperty(fecha))[fecha];
    
    console.log(numeroBuscado); // Devuelve 2
}


module.exports = {
    GuardarLinea,
    getFirstLineAsNumber,
}