import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
@Component({
  selector: 'app-ver-informacion',
  templateUrl: './ver-informacion.component.html',
  styleUrls: ['./ver-informacion.component.css']
})
export class VerInformacionComponent implements OnInit {

  @Input() tareaInformacion: Tarea;
  @Output() cerrarVentanaInformacion = new EventEmitter<void>();  // Este es el evento que se emitirá al padre


  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.tareaInformacion);
  }

  cerrarVentana(){
    this.cerrarVentanaInformacion.emit();
  }

}
