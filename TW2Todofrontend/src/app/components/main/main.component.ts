import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tareas : Tarea[];
  form : FormGroup;
  verTareasPendientes:boolean;
  titulo: string;

  constructor(private httpClient:HttpClient,private fb:FormBuilder, private tareaService:TareaService) {
    
    this.form = this.fb.group({
      titulo:["",Validators.required],
      descripcion:["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.mostrarTareasPendientes();
  }

  traerTareas():void{
    this.tareaService.getTareas().subscribe(valor =>{
      console.log(valor);
      if(this.verTareasPendientes == true)
        this.tareas = valor.filter(x=>x.activa==false);
      else
        this.tareas = valor.filter(x=>x.activa == true);
    });
  }

  mostrarTareasCompletadas(){
    this.verTareasPendientes = false;
    this.traerTareas();
    this.titulo =" Tareas Completadas";
  
  }

  mostrarTareasPendientes(){
    this.verTareasPendientes =true;
    this.traerTareas();
    this.titulo =" Tareas Pendientes";
  }


  crearTarea(): void{
    const tareaNueva : Tarea = {
      titulo:this.form.value.titulo,
      descripcion: this.form.value.descripcion,
      activa: false,
    };

    this.tareaService.saveTarea(tareaNueva).subscribe(data=>{
      console.log(data);
      this.traerTareas();
    });
    console.log(tareaNueva);
  }


  eliminarTarea():void{
    
  }


}
