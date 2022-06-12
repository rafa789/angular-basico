import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes:Personaje[] = [
        {
          nombre: 'Goku',
          poder:12000
        },
        {
          nombre:'Vegeta',
          poder:9000
        }
    ];

    get personajes():Personaje[] {
        return [...this._personajes];
    }

    constructor(){
        console.log('Servicio Inicializado');       
    }

    agregarPersonajes(arg:Personaje){
        this._personajes.push(arg);
    }
}