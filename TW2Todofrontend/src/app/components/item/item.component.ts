import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() id : number;
  @Input() titulo: string;
  @Input() descripcion: string;
  @Input() activa : boolean;


  //Eventos a emitir al padre
  @Output() productoEliminado = new EventEmitter<void>();  // Este es el evento que se emitirá al padre
  @Output() cambioEstadoTarea = new EventEmitter<void>();
  @Output() mostrarInformacionTarea = new EventEmitter<number>();
  @Output() editarTareaInformacion = new EventEmitter<number>();

  constructor(private tareaService:TareaService, private toastService: ToastrService) { }

  ngOnInit(): void {
  }


  mostrarTarea(){
    this.mostrarInformacionTarea.emit(this.id);
  }

  eliminarTarea(id:number){
    this.tareaService.deleteTarea(id).subscribe(data=>{
      this.productoEliminado.emit();
      this.toastService.warning("Tarea eliminada exitosamente","Tarea Eliminada");
    });
  }

  cambiarEstado(){
    const tareaActualizada:Tarea = {
      id:this.id,
      titulo:this.titulo,
      descripcion:this.descripcion,
      activa: this.activa
    }

    const tareaEstadoActualizada:Observable<any> = (tareaActualizada.activa) ?
    this.tareaService.updateTareaToInactiva(tareaActualizada.id, tareaActualizada) : 
    this.tareaService.updateTareaToActiva(tareaActualizada.id, tareaActualizada);


    tareaEstadoActualizada.subscribe(data=>{
      this.cambioEstadoTarea.emit();
      this.toastService.info("Estado de la tarea actualizada exitosamente","Tarea Actualizada");  
    })
  }

  editarTarea(){
    this.editarTareaInformacion.emit(this.id);
  }
}
