import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Tarea } from 'src/app/models/tarea';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ver-informacion',
  templateUrl: './ver-informacion.component.html',
  styleUrls: ['./ver-informacion.component.css']
})
export class VerInformacionComponent implements OnInit {

  tareaInformacion: Tarea;

  constructor(private location:Location, private router:Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.tareaInformacion = navigation.extras.state.tareaInformacion;
    console.log(this.tareaInformacion);
  }

  ngOnInit(): void {
  }

  cerrarVentana(){
    this.location.back();
  }

}
