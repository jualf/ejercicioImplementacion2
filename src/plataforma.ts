import { Canal } from "./canal"
import { Aplicacion } from "./aplicacion"
import { Streamer } from "./streamer"

export class Plataforma {
    nombre:string
    logo: string
    descripcion:string
    empresaPatrocinadora: string

    aplicacion: Aplicacion | undefined
    canales: Canal[]
    streamers: Streamer [] 
      

    constructor(nombre: string, logo: string, descripcion: string, empresaPatrocinadora: string){
        this.nombre = nombre
        this.logo = logo
        this.descripcion = descripcion
        this.empresaPatrocinadora = empresaPatrocinadora
        this.canales = []
        this.streamers = []

    }

    agregarCanal(canal:Canal){
        this.canales.push(canal)
        canal.agregarPlataforma(this)
    }
    agregarAplicacion(aplicacion:Aplicacion){
        this.aplicacion = aplicacion
    }

    agregarStreamer(streamer: Streamer){
        this.streamers.push(streamer) 
        streamer.agregarPlataforma(this)
    }

    
    
    mostrarDetallePlataforma(){//2. Mostrar detalle de plataforma
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Logo: ${this.logo}`)
        console.log(`Descipción: ${this.descripcion}`)
        console.log(`Empresa patrocinadora: ${this.empresaPatrocinadora}`)
    }

    listadoCanales(){//3. Mostrar el listado de canales
        console.log("Listado de canales:")
        this.canales.forEach((canales)=>{
            console.log(canales)
        })
    }

    listaStreamers(){// 5. Mostrar el listado de streamers
        console.log("Listado de Streamers:")
        this.streamers.forEach((streamers)=>{
            console.log(streamers.nickname)
        })
    }

    
}