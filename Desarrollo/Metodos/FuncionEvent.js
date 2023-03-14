var MecanizadoLog = require('../Clases/MecanizadoLog')
var DataBase = require('../Metodos/DataBase')

urlLogs= "C:/Users/lcavana/OneDrive - 158282_158283_TENANT_DELTA_COMPRESION_SRL/Documentos/TOTVS/Andon/Desarrollo/File/LogsNoEncontrados.txt"
//Guardar Logs No encontrados

function GuardarLog(string){
    const fs = require('fs');
    
    fs.appendFileSync(urlLogs, string+"\n");
}


//CREACION DE LAS FUNCIONES DE EVENTO
function EventDetect(event, aArray,line,count) {

    IniFecha = false
    FinFecha = false
    error  = false
    MecLog = new MecanizadoLog()
    switch (event) {
        case 'COMMAND_OK':
            //Log: [2022-11-01 13:43:35] 192.168.24.55:55534: 2021-06-05 23:24:56.506,COMMAND_OK,ME855 ->,MACHMAINTEN ->ignorar    
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4])
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
            case 'CYCLE_END':
            //2022-11-15 07:20:18,192.168.24.50:57724:,2021-10-26 10:27:53.804,CYCLE_END,ME853,91138-20,1709,2021-10-26 10:20:13.881,2021-10-26 10:27:53.803
            
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4])
            MecLog.setProducto(aArray[5].substring(0, aArray[5].lastIndexOf('-')));
            MecLog.setOperacion(aArray[5].substring(aArray[5].lastIndexOf('-')+1))
            MecLog.setOperario(aArray[6])
            MecLog.setInicio_Rasberry(aArray[7].replace(" ","T"))
            MecLog.setFin_Rasberry(aArray[8].replace(" ","T"))

            IniFecha = false
            FinFecha = false
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'CYCLE_START':
            //[2022-11-15 07:27:23] 192.168.24.82:39728: 2021-10-23 14:28:28.619,CYCLE_START,ME234,97311-40,990577,2021-10-23 14:28:28.619

            if(aArray[7].indexOf('-') === -1){
                MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
                MecLog.setIp(aArray[1])
                MecLog.setEvento(aArray[3])
                MecLog.setRecurso(aArray[4])
                MecLog.setProducto(aArray[5].substring(0, aArray[5].lastIndexOf('-')));
                MecLog.setOperacion(aArray[5].substring(aArray[5].lastIndexOf('-')+1))
                MecLog.setOperario(aArray[6])
                MecLog.setInicio_Rasberry(aArray[7].replace(" ","T"))
                MecLog.setFin_Rasberry("")
    
                
            }
            else{
                
                MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
                MecLog.setIp(aArray[1])
                MecLog.setEvento(aArray[3])
                MecLog.setRecurso(aArray[4])
                MecLog.setProducto(aArray[5].substring(0, aArray[5].lastIndexOf('-')));
                MecLog.setOperacion(aArray[5].substring(aArray[5].lastIndexOf('-')+1))
                MecLog.setOperario(aArray[6])
                MecLog.setInicio_Rasberry(aArray[7].replace(" ","T").substring(0,(aArray[7].indexOf('.')+4)))
                MecLog.setFin_Rasberry("")
            }

            IniFecha = false
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break; 
        case 'PARTOPREG_OK':
            //[2022-11-15 07:16:45] 192.168.24.55:37932: 2021-06-09 02:22:10.057,PARTOPREG_OK,ME855,26001-00-010,1576
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4])
            MecLog.setProducto(aArray[5].substring(0, aArray[5].lastIndexOf('-')));
            MecLog.setOperacion(aArray[5].substring(aArray[5].lastIndexOf('-')+1))
            if(aArray[6].indexOf('-') === -1){
                MecLog.setOperario(aArray[6])
            }
            else{
                MecLog.setOperario(aArray[6].substring(0,(aArray[6].indexOf('-')-4)))
            }
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'PRODUCCION NO CONFORME':
            break; 
        case 'PARTOPREG_ERR_INVALID':
            //[2022-11-15 07:17:07] 192.168.24.82:39728: 2021-10-23 14:18:12.785,PARTOPREG_ERR_INVALID,ME234
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4])
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'SCAN':

            //[2022-11-15 15:17:51] 192.168.24.56:44448: 2021-11-15 17:08:13.822,SCAN,ME868,1709 //=> operario
            //[2022-11-15 15:17:54] 192.168.24.56:44448: 2021-11-15 17:08:16.756,SCAN,ME868,91138-30 //=> Producto con operacion
            
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4])

            if(aArray[5].includes('-')){
                if(aArray[5].includes(':')){
                    string = aArray[5].substring(0,(aArray[5].indexOf(':')-13))
                
                    MecLog.setProducto(string.substring(0, string.lastIndexOf('-')));
                    MecLog.setOperacion(string.substring(string.lastIndexOf('-')+1))
                }
                else{
                    MecLog.setProducto(aArray[5].substring(0, aArray[5].lastIndexOf('-')));
                    MecLog.setOperacion(aArray[5].substring(aArray[5].lastIndexOf('-')+1))
                }
                MecLog.setOperario("")
            }
            else{
                MecLog.setProducto("");
                MecLog.setOperacion("")
                if(/^\d+$/.test(aArray[5])){
                    MecLog.setOperario(aArray[5])
                }
                else{
                    MecLog.setOperario("")
                }
                
            }
            
            
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'SYS_READY':
            //[2022-11-15 07:08:52] 192.168.24.82:49576: 2021-10-23 14:17:18.501,SYS_READY,ME234
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4])
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break; 
        case 'SYS_START':
            //[2022-11-15 11:11:04] 192.168.24.56:44546: 2021-11-15 15:17:18.671,SYS_START
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso("")
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;         
        case 'MACHINE_ENABLE':
            //[2022-11-15 14:56:55] 192.168.24.52:56602: 2021-12-23 00:22:11.717,MACHINE_ENABLE,ME062
            try{
                MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
                MecLog.setIp(aArray[1])
                MecLog.setEvento(aArray[3])
                MecLog.setRecurso(aArray[4])
                MecLog.setProducto("");
                MecLog.setOperacion("")
                MecLog.setOperario("")
                MecLog.setInicio_Rasberry("")
                MecLog.setFin_Rasberry("")
    
                IniFecha = true
                FinFecha = true
                //DataBase(MecLog,IniFecha,FinFecha,line,count)
            }
            catch(error){
                console.log(err + '\n'+line)
                error = true
            }
            break; 
        case 'FALLA DE SERVICIOS':
            console.log("Formato de log no generado || Log: "+line)    
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        case 'FALLO DE MAQUINA ':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        case 'FALTA DE HERRAMENTAL':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        case 'FALTA DE MATERIA PRIMA':
            console.log("Formato de log no generado\nLog: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        case 'FALTA/CAMBIO DE OPERARIO':
            console.log("Formato de log no generado || Log: "+line)
            break;
        case 'FALTANTES EN LINEA':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        case 'MACHINE_ANOTHERMISSING':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break;
        case 'MACHINE_DISABLE':
            //[2022-11-21 17:02:26] 192.168.24.83:32952: 2022-07-20 17:27:34.602,MACHINE_DISABLE,ME131
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4].substring(0,5))
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'MACHINE_FAILURE':
            //Log: 2022-11-12 08:49:09,192.168.24.55:50866:,2021-06-08 12:35:15.411,MACHINE_FAILURE,ME855
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4].substring(0,5))
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")

            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)

            break;
        case 'MACHINE_MAINTENANCE':
            //Log: [2022-11-01 13:43:34] 192.168.24.55:55534: 2021-06-05 23:24:54.960,MACHINE_MAINTENANCE,ME855 - 2021-06-05 23:24:54.961,MACHINE_ENABLE,ME855
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4].substring(0,5))
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")
            
            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'MACHINE_RAWMATERIALMISSING':
            //Log: 2022-11-11 07:12:08,192.168.24.83:49430:,2022-07-16 19:18:50.716,MACHINE_RAWMATERIALMISSING,ME131
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4].substring(0,5))
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")
            
            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'MACHINE_READY':
            //Log: 2022-11-12 08:49:37,192.168.24.55:50866:,2021-06-08 12:35:43.769,MACHINE_READY,ME8552021-06-08 12:35:43.769,COMMAND_OK,ME855,MACHREADY
            MecLog.setFecha_Hora(aArray[0].replace(" ","T"))
            MecLog.setIp(aArray[1])
            MecLog.setEvento(aArray[3])
            MecLog.setRecurso(aArray[4].substring(0,5))
            MecLog.setProducto("");
            MecLog.setOperacion("")
            MecLog.setOperario("")
            MecLog.setInicio_Rasberry("")
            MecLog.setFin_Rasberry("")
            
            IniFecha = true
            FinFecha = true
            //DataBase(MecLog,IniFecha,FinFecha,line,count)
            break;
        case 'MACHINE_SETUP':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break;
        case 'MACHINE_TOOLMISSING':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break;
        case 'MACHREADY':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break;
        case 'MACHSETUP':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        case 'MANTENIMIENTO CORRECTIVO':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        case 'MANTENIMIENTO PREVENTIVO':
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break; 
        default: 
            console.log("Formato de log no generado || Log: "+line)
            GuardarLog("Formato de log no generado || "+ count+" || Log: "+line)
            break;
    }

    if(error==false){
       return DataBase(MecLog,IniFecha,FinFecha,line,count)
    }
}


module.exports = {
    EventDetect,
    GuardarLog
}