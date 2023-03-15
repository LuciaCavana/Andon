
const readline = require('readline');
const fs = require('fs');

var FuncionEvent = require('./FuncionEvent');
var gLine = require('./Line');

pos = 11
pos2 = 51

//FUNCION LECTURA DE LOGS 

function LecturaLogs(url,num){
    // Abre un stream de lectura para el archivo
    const fileStream = fs.createReadStream(url);
    
    // Crea una interfaz de lectura de línea por línea
    const readInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    
    // Contador para el número de líneas leídas
    lineCount = 0;
    c= num
    

    // Escucha el evento "line" para leer cada línea
    readInterface.on('line', (line) => {
            lineCount+=1;
            // Verifica que sera la lina adecuada para leer y hacer el guardado del dato
            if (lineCount > c) {
                if(!line.match("Connected")){
                    if( !line.match("Application start")){
                            
                        /*Separamos en dos string el log, donde en el primer lado tendremos la parte donde las separaciones
                            No estan hechas con , */
                            
                            /*Remplazamos todos los espacios por una coma, despues sacamos los corchetes y 
                            por ultimo remplazamos las comas que separan la fecha de la hora*/


                            string = line.substring(0,66).replace(/ /g,",")
                            string = string.substr(0,11).replace("[","")+" "+ string.substr(11+1).replace("]","")
                            string = string.substr(0,51)+" "+ string.substr(52).replace(","," ")

                            /*Aca dejamos la segunda parte de la linea, con la cual no haremos nada */
                            string2 = line.substring(66)
                            
                            //Unimos la primera parte ya acabada con la segunda
                            string = string + string2

                            aMecanizado = string.split(",")
                            
                           FuncionEvent.EventDetect(aMecanizado[3],aMecanizado,string,lineCount)
                        
                    }
                }            
            }
            //Guarda en tLine la ultima linea
            
            if(lineCount>num){gLine.GuardarLinea(lineCount)}
        });

        readInterface.on('error', function(error) {
            console.error(error);
        });
        readInterface.on('close', () => {
          });
}

module.exports = {
    LecturaLogs
}