import { Plataforma } from "./plataforma"
import { Stream } from "./stream"

export class Streamer {
    nickname: string
    descripcion: string
    redesSociales: string

    plataforma: Plataforma | undefined
    streams: Stream[]

    constructor(nickname: string, descripcion: string, redesSociales: string){
        this.nickname = nickname
        this.descripcion = descripcion
        this.redesSociales = redesSociales
        this.streams = []
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma = plataforma
    }
    
    agregarStream(stream:Stream){
        this.streams.push(stream)
    }

    mostrarDetalleStreamer(){//6. Ver el detalle de un streamer
        console.log(`Nombre: ${this.nickname}`)
        console.log(`Logo: ${this.descripcion}`)
        console.log(`Descipción: ${this.redesSociales}`)
        
    }

    
}