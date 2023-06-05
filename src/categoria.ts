import { Stream } from "./stream"

export class Categoria {
    nombre: string
    imagen: string
    descripcion: string

    streams:Stream[]

    constructor(nombre: string, imagen: string, descripcion: string){
        this.nombre = nombre
        this.imagen = imagen
        this.descripcion = descripcion
        this.streams = []

    }

    
}