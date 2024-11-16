import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() id : number;
  @Input() titulo: string;
  @Input() recordatorio: string;
  @Input() activa : boolean;

  @Output() productoEliminado = new EventEmitter<void>();  // Este es el evento que se emitirá al padre


  constructor(private tareaService:TareaService) { }

  ngOnInit(): void {
  }

  eliminarProducto(id:number){
    this.tareaService.deleteTarea(id).subscribe(data=>{
      this.productoEliminado.emit();
    });
  }

}
