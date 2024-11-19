import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  tareaInformacion : Tarea;
  tareaEditar:Tarea;

  abrirEdicionTarea:boolean;
  abrirInformacionTarea:boolean;

  constructor(private router:Router,private fb:FormBuilder, private tareaService:TareaService, private toastService:ToastrService ) {
    
    this.form = this.fb.group({
      titulo:["",Validators.required],
      descripcion:["",Validators.required]
    });

    this.abrirEdicionTarea = false;
    this.abrirInformacionTarea = false;
  }

  ngOnInit(): void {
    this.mostrarTareasPendientes();
  }

  traerTareas():void{
    
    //Version Nueva: traer tareas activas/inactivas
    /*
    const tareasObservable = (this.verTareasPendientes == true) ? 
    this.tareaService.getTareasActivas() : 
    this.tareaService.getTareasInactivas();

    tareasObservable.subscribe(valor =>{
      console.log(valor);
      this.tareas = valor;
    });
    */
    //Version anterior: traer tareas activas/inactivas 
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
      this.toastService.success("La tarea ha sido agregada exitosamente", "Tarea agregada")
      this.traerTareas();
    });
    console.log(tareaNueva);
  }


  //Ver informacion de la tarea
  verInformacionDeLaTarea(id:number){
    this.tareaService.getTareaById(id).subscribe(data=>{
      this.tareaInformacion = data[0];
      console.log(this.tareaInformacion);/*
      this.router.navigate(["/verInformacionView"],{
        state: {tareaInformacion: this.tareaInformacion}
      });*/

      this.abrirInformacionTarea = true;

    });
  }

  cerrarInformacionTarea(){
    this.abrirInformacionTarea = false;
  }


  
  //Edicion de tareas
  editarInformacionDeLaTarea(id:number){
    this.tareaService.getTareaById(id).subscribe(data=>{
      this.tareaEditar = data[0]
      
      /*this.router.navigate(["/editarTareaView"],{
        state:{tareaEditar:this.tareaEditar}
      });*/

      this.abrirEdicionTarea = true;
      console.log(this.abrirEdicionTarea);
    })
  }

  
  cerrarEdicionTarea(){
    this.abrirEdicionTarea = false;
  }
  actualizarTarea(){
    this.abrirEdicionTarea = false;
    this.traerTareas();
    this.toastService.info("Tarea editada con exito","Tarea editada");
  }
}
