import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html'
})
export class NuevoComponent {

  
  @Input() nuevo:Personaje = {nombre:'',poder:0};
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); 
  
  constructor(private dbzService:DbzService) {
    
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo);
    
    this.nuevo = {nombre:'',poder:0};
    
  }

}
