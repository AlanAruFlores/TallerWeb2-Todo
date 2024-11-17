import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tarea } from '../models/tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private apiUrl:string;

  constructor(private httpClient:HttpClient) { 
    this.apiUrl = environment.endpoint;
  }

  getTareas():Observable<Tarea[]>{
    const tareasObservable: Observable<Tarea[]>  = this.httpClient.get<Tarea[]>(this.apiUrl);
    return tareasObservable;
  }

  saveTarea(tarea:Tarea):Observable<Tarea>{
    return this.httpClient.post(this.apiUrl, tarea)
  }

  deleteTarea(id:number):Observable<Tarea>{
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  updateTarea(id:number, tarea:Tarea):Observable<Tarea>{
    return this.httpClient.put(`${this.apiUrl}/${id}`,tarea);
  }
}
