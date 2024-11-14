import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  httpClient : HttpClient;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
   }

  ngOnInit(): void {
    let tareasObservable: Observable<Tarea[]>  = this.httpClient.get<Tarea[]>("http://localhost:3000/api/tarea");
    tareasObservable.subscribe(valor =>{
      console.log(valor);
    })
  }

}
