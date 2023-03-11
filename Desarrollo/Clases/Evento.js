class Evento
    {
        //Variables
        id_Evento 
        Evento
        Descripcion
        Tipo_Evento

        constructor(id_Evento, Evento,Descripcion,Tipo_Evento) {
            this.id_Evento = id_Evento 
            this.Evento = Evento
            this.Descripcion = Descripcion
            this.Tipo_Evento = Tipo_Evento
        }

        //Gets and Sets
        setId_Evento(x){this.id_Evento = x;}
        setEvento(x){this.Evento = x;}
        setDescripcion(x){this.Descripcion = x;}
        setTipo_Evento(x){this.Tipo_Evento = x;}

        getEvento(){return this.Evento}
        getId_Evento(){return this.id_Evento}
        getDescripcion(){return this.Descripcion}
        getTipo_Evento(){return this.Tipo_Evento}

        Mostrar(){console.log("Evento: " + this.FechaEvento_Hora + 
        "\n id_Evento: " + this.id_Evento + 
        "\n Descripcion: " + this.Descripcion + 
        "\n Tipo_Evento: " + this.Tipo_Evento )}
    }

