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
const {setInterval} = require('timers')

pos = 11
pos2 = 51
tLine = getFirstLineAsNumber()

//Obtener la fecha del sistema en el formato deseado
fecha = '2023-03-09'

//Crea la URL junto al nombre del archivo a leer (la fecha del dia)
const URL = "U:/Sistemas/Logs/";
//const URL = "C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Logs/";

function GuardarLinea(nNum){
    const fs = require('fs');

    const filename = 'C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Desarrollo/File/FileNumLine.txt';
    const data = nNum;


    fs.writeFile(filename, data.toString(), { flag: 'w' }, function (err) {
    if (err) {
        console.error(err);
    }
    });

}

function getFirstLineAsNumber() {
    const filename = 'C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Desarrollo/File/FileNumLine.txt';
    const data = fs.readFileSync(filename, 'utf-8').split('\n')[0];
    const number = Number(data);
    return number;
}
//FUNCION LECTURA DE LOGS 

function LecturaLogs(url){
    
    
    c = tLine
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
            tLine = lineCount
        });
        GuardarLinea(tLine)
        readInterface.on('error', function(error) {
            console.error(error);
        });
        readInterface.on('close', () => {
          });
}

//Funcion de inicio que va a ser llamada cada segundo
function Inicio(){
    hoy = new Date().toISOString().substr(0,10)  
    if(fecha == hoy){
        LecturaLogs(URL+fecha+".log") 
    }
    else{
        GuardarLinea(0)
        fecha = hoy
    }
}


setInterval(Inicio,1000)

console.log("El programa esta en ejecucion")

