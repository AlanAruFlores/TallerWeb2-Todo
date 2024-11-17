import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerInformacionComponent } from './components/ver-informacion/ver-informacion.component';
const routes: Routes = [ //Array de las rutas que vamos a tener en el contexto de nuestro componente
  {path:"verInformacionView", component: VerInformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
