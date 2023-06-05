import { Plataforma } from "./plataforma"
import { Stream } from "./stream"

export class Canal{
    nombre: string
    banner: string
    descripcion: string

    plataforma: Plataforma | undefined
    streams: Stream[]



    constructor(nombre: string, banner: string, descripcion: string){
        this.nombre = nombre
        this.banner = banner
        this.descripcion = descripcion
        this.streams = []
    }
   
    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma
    }

    agregarStream(stream:Stream){
        this.streams.push(stream)
    }

    mostrarDetalleCanal(){//4. Mostrar detalle de Canal
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Logo: ${this.banner}`)
        console.log(`Descipción: ${this.descripcion}`)
        
    }

    listadoStreams(){//7. Mostrar el listado de streams
        console.log("Listado de streams:")
        this.streams.forEach((streams)=>{
            console.log(streams)
        })
    }

    
    
}