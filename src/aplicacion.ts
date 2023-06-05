import {Plataforma} from "./plataforma"

export class Aplicacion {
    plataformas: Plataforma []

    constructor(){
        this.plataformas = []

    }

    agregarPlataforma(plataforma: Plataforma){
        this.plataformas.push(plataforma)
        
    }

    listadoPlataformas(){ //1. Listado Plataformas
        console.log("Listado de plataformas:")
        this.plataformas.forEach((plataformas)=>{
            console.log(plataformas)
        })
    }
}