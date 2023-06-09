var sql = require('mssql/msnodesqlv8');

var config = {
  connectionString: "Driver=SQL Server;Server=LCAVANA\\LCAVANA;Database=AndonTesting;Trusted_Connection=true;"
};

function GuardarLog(string){
  const fs = require('fs');
  
  fs.appendFileSync(urlLogs, string+"\n");
}

//Conectar()

function GeneretQuery(MecLog){
  QUERY = "insert into MecanizadoLog(Fecha_Hora, Ip,Evento,Recurso,Producto,Operacion,Operario,Inicio_Raspberry,Fin_Raspberry,IdEvento) VALUES ("

  QUERY+="'" + MecLog.getFecha_Hora() + "','"
  QUERY+=MecLog.getIp() + "','"
  QUERY+=MecLog.getEvento() + "','"
  QUERY+=MecLog.getRecurso() + "','"
  QUERY+=MecLog.getProducto() + "','"
  QUERY+=MecLog.getOperacion() + "','"
  QUERY+=MecLog.getOperario() + "','"
  QUERY+=MecLog.getInicio_Rasberry() + "','"
  QUERY+=MecLog.getFin_Rasberry() +"',"+
  "(select Id_Evento from Eventos where Evento ='"+MecLog.getEvento()+"')"+")"
  
  return QUERY
}

function Insert_logs(query,IniFecha,FinFecha,MecLog,line, count){
      new sql.Request().query(
      query,  //String de la Query
      (err, result) => {
      if(err) { 
        console.log("Motivo de error: "+ err);
        GuardarLog("Formato de log no generado || linea: "+count+" || Log: "+line+"\nObjeto\n"+MecLog.Mostrar());
      }
      else{
        const date = new Date().toISOString().substr(0,20)
        console.log("Ingresado Correctamente: "+date);
        nullFecha(IniFecha,FinFecha)
      }
    });
  

}

function nullFecha(IniFecha,FinFecha){
  if(IniFecha = true){
    new sql.Request().query(
      "update MecanizadoLog set Inicio_Raspberry = null where Inicio_Raspberry = '1900-01-01 00:00:00.000'",  //String de la Query
        (err, result) => {
      if(err) { 
        console.log("Motivo de error: "+ err);
      }
      else{
        //console.log("Ingresado Correctamente");
      }
    });
  }
  if(FinFecha = true){
    new sql.Request().query(
      "update MecanizadoLog set Fin_Raspberry = null where Fin_Raspberry = '1900-01-01 00:00:00.000'",  //String de la Query
        (err, result) => {
      if(err) { 
        console.log("Motivo de error: "+ err);
      }
      else{
        //console.log("Ingresado Correctamente");
      }
    });
  }
}

module.exports = function Conectar(MecLog,IniFecha,FinFecha,line, count){
 
  sql.connect(config, function (err) {
    if (err) { console.log(JSON.stringify(err)+'..............') }
    else {
      try{
       Insert_logs(GeneretQuery(MecLog),IniFecha,FinFecha,MecLog,line,count)
      }
      catch(err){
        console.log("Error" +'\n'+err)
      }
    }
  }
  );
}
