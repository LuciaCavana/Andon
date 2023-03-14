const {setInterval} = require('timers')

var line = require('./Metodos/Line')
var Lectura = require('./Metodos/Lectura');

tLine = line.getFirstLineAsNumber()

//Si el programa se detiene, hay que guardar en la varibale fecha la fecha de hoy

fecha = '2023-03-09'

//Crea la URL junto al nombre del archivo a leer (la fecha del dia)
//const URL = "U:/Sistemas/Logs/";
const URL = "C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Logs/";

function Inicio(){
  hoy = new Date().toISOString().substr(0,10)  
  
  if(tLine==0 ){line.GuardarLinea(0)}
  if(fecha == hoy){
      Lectura.LecturaLogs(URL+fecha+".log",tLine) 
  }
  else{
    console.log(hoy)
      line.GuardarLinea(0)
      tLine = line.getFirstLineAsNumber()
      fecha = hoy
  }
}

setInterval(Inicio,1000)

console.log("El programa esta en ejecucion")

