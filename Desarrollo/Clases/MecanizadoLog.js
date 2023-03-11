
class MecanizadoLog
    {
        //Variables
        Fecha_Hora 
        Ip 
        Evento 
        Recurso 
        Producto 
        Operacion  
        Operario 
        Inicio_Rasberry 
        Fin_Rasberry 
        idEvento 

        constructor(Fecha_Hora,Ip,Evento,Recurso,Producto,Operacion,Operario,Inicio_Rasberry,Fin_Rasberry,idEvento) {
            this.Fecha_Hora =  Fecha_Hora 
            this.Ip = Ip
            this.Evento = Evento
            this.Recurso = Recurso
            this.Operacion =  Operacion 
            this.Producto = Producto
            this.Operario = Operario
            this.Inicio_Rasberry =  Inicio_Rasberry 
            this.Fin_Rasberry =  Fin_Rasberry 
            this.idEvento = idEvento
          }

        //Gets and Sets
        setFecha_Hora(x){this.Fecha_Hora = x;}
        setIp(x){this.Ip = x;}
        setEvento(x){this.Evento = x;}
        setRecurso(x) {this.Recurso = x;}
        setProducto(x){this.Producto = x;}
        setOperacion(x){this.Operacion = x;}
        setOperario(x){this.Operario = x;}
        setInicio_Rasberry(x){this.Inicio_Rasberry = x;}
        setFin_Rasberry(x){this.Fin_Rasberry = x;}
        setidEvento(x){this.idEvento = x;}

        getFecha_Hora(){return this.Fecha_Hora;}
        getIp(){return this.Ip}
        getEvento(){return this.Evento;}
        getRecurso(){return this.Recurso;}
        getProducto(){return this.Producto;}
        getOperacion(){return this.Operacion;}
        getOperario(){return this.Operario;}
        getInicio_Rasberry(){return this.Inicio_Rasberry;}
        getFin_Rasberry(){return this.Fin_Rasberry;}
        getidEvento(){return this.idEvento;}

        Mostrar(){
            const mensaje = "Fecha y Hora: " + this.Fecha_Hora + 
            "\n Ip: " + this.Ip + 
            "\n Evento: " + this.Evento + 
            "\n Recurso: " + this.Recurso + 
            "\n Producto: " + this.Producto + 
            "\n Operacion: " + this.Operacion + 
            "\n Operario: " + this.Operario + 
            "\n Inicio_Rasberry: " + this.Inicio_Rasberry +
            "\n Fin_Rasberry: " + this.Fin_Rasberry
            console.log(mensaje)
            return mensaje
        }

    }


module.exports = MecanizadoLog; 