/*
Realizado:
1- Lectura en tiempo real sin que se vuelvan a leer lineas anteriores

Faltante:
1- Hacer la separacion de campos de forma correcta.
2- Guardar los datos en el DataBase

*/
const readline = require('readline');
const fs = require('fs');

var FuncionEvent = require('./FuncionEvent');
var line = require('./Line')



pos = 11
pos2 = 51

//FUNCION LECTURA DE LOGS 

function LecturaLogs(url,tline){
    salir = false
    c = tline
    // Abre un stream de lectura para el archivo
    const fileStream = fs.createReadStream(url);
    
    // Crea una interfaz de lectura de línea por línea
    const readInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    // Contador para el número de líneas leídas
    lineCount = 0;
    

    // Escucha el evento "line" para leer cada línea
    readInterface.on('line', (line) => {
            lineCount+=1;
            //Inicio de while
            /*while(salir!=true){
                console.log(lineCount)
                console.log(c)
                console.log(line)
                // Verifica que sera la lina adecuada para leer y hacer el guardado del dato
                salir = true
            }*/
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
                            
                            salir= FuncionEvent.EventDetect(aMecanizado[3],aMecanizado,string,lineCount)
                           console.log(salir)   
                        }
                    }
                }
        
                    
            //Guarda en tLine la ultima linea
            tLine = lineCount
        });
        
        line.GuardarLinea(tLine)

        readInterface.on('error', function(error) {
            console.error(error);
        });
        readInterface.on('close', () => {
          });
}

module.exports = {
    LecturaLogs
}