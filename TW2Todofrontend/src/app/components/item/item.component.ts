import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
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

  @Output() productoEliminado = new EventEmitter<void>();  // Este es el evento que se emitirá al padre
  @Output() cambioEstadoTarea = new EventEmitter<void>();
  @Output() mostrarInformacionTarea = new EventEmitter<number>();

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
      activa: (this.activa == true) ? false : true
    }

    this.tareaService.updateTarea(this.id,tareaActualizada).subscribe(data=>{
      this.cambioEstadoTarea.emit();
      this.toastService.info("Estado de la tarea actualizada exitosamente","Tarea Actualizada");  
    })
  }
}
