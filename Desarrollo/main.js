const {setInterval} = require('timers')

var line = require('./Metodos/Line')
var Lectura = require('./Metodos/Lectura');

//Si el programa se detiene, hay que guardar en la varibale fecha la fecha de hoy

fecha = '2023-03-15'

//Crea la URL junto al nombre del archivo a leer (la fecha del dia)
const URL = "U:/Sistemas/Logs/";
//const URL = "//192.168.24.51/Users/kanban/Desktop/Andon/Logs/";

function Inicio(){
  tLine = line.getFirstLineAsNumber()
  hoy = new Date().toISOString().substr(0,10)  
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

var Service = require('node-windows').Service;

// Crea un nuevo objeto de servicio
var svc = new Service({
  name:'RunnerAndon',
  description: 'Iniciar lector de logs',
  script: 'C:\\Users\\lcavana\\OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL\\Documentos\\TOTVS\\Andon\\Desarrollo\\main.js'
});

// Escucha cuando se instala el servicio
svc.on('install',function(){
  svc.start();
});

// Instala el servicio
svc.install()