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

  getTareasActivas():Observable<Tarea[]>{
    return this.httpClient.get<Tarea[]>(`${this.apiUrl}/activas`);
  }

  getTareasInactivas():Observable<Tarea[]>{
    return this.httpClient.get<Tarea[]>(`${this.apiUrl}/inactivas`);
  }

  
  getTareaById(id:number):Observable<Tarea>{
    return this.httpClient.get<Tarea>(`${this.apiUrl}/${id}`); 
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
  updateTareaToInactiva(id:number,tarea:Tarea):Observable<any>{
    return this.httpClient.put(`${this.apiUrl}/${id}/inactivar`,tarea);
  }
}
