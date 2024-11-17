import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {

  @Output() tareaEditadaExitosamente = new EventEmitter<void>();
  @Output() cerrarEdicionDeTarea =  new EventEmitter<void>();

  @Input() tareaEditar:Tarea;

  form: FormGroup;

  constructor(private fb:FormBuilder, private tareaService:TareaService) {
  }

  ngOnInit(): void {   
     this.form = this.fb.group({
      titulo:[this.tareaEditar.titulo,Validators.required],
      descripcion:[this.tareaEditar.descripcion,Validators.required]
    });
  }

  editarTareaInformacion(){

    const tareaEditada : Tarea= {
      id:this.tareaEditar.id,
      titulo:this.form.value.titulo,
      descripcion: this.form.value.descripcion,
      activa: this.tareaEditar.activa      
    }

    this.tareaService.updateTarea(this.tareaEditar.id,tareaEditada).subscribe(data=>{
      this.tareaEditadaExitosamente.emit();
      console.log("emitido");
    });
  }

  cerrarEdicionVentana(){
    this.cerrarEdicionDeTarea.emit();
  }

}
