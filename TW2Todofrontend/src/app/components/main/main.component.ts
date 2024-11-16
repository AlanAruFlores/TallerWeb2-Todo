import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tareas : Tarea[];
  form : FormGroup;

  constructor(private httpClient:HttpClient,private fb:FormBuilder) {
    this.form = this.fb.group({
      titulo:["",Validators.required],
      recordatorio:["",Validators.required]
    });
  }

  ngOnInit(): void {
    let tareasObservable: Observable<Tarea[]>  = this.httpClient.get<Tarea[]>("http://localhost:3000/api/tarea");
    tareasObservable.subscribe(valor =>{
      console.log(valor);
      this.tareas = valor;
    });
  }


  crearTarea(): void{
    const tareaNueva : Tarea = {
      titulo:this.form.value.titulo,
      recordatorio: this.form.value.recordatorio,
      activa: true,
    };


    this.httpClient.post("http://localhost:3000/api/tarea", tareaNueva).subscribe(data => {
      console.log(data);
    });
    console.log(tareaNueva);
  }





}
