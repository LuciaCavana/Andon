const readline = require('readline');
const fs = require('fs');
const filename = 'C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Desarrollo/File/FileNumLine.txt';

function getFirstLineAsNumber() {
    const data = fs.readFileSync(filename, 'utf-8').split('\n')[0];
    const number = Number(data);
    return number;
}

function GuardarLinea(nNum){
    const fs = require('fs');
    const data = nNum;

    fs.writeFile(filename, data.toString(), { flag: 'w' }, function (err) {
    if (err) {
        console.error(err);
    }
    });

}

module.exports = {
    getFirstLineAsNumber,
    GuardarLinea,
}