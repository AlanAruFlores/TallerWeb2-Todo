import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerInformacionComponent } from './components/ver-informacion/ver-informacion.component';
import { EditarTareaComponent } from './components/editar-tarea/editar-tarea.component';
const routes: Routes = [ //Array de las rutas que vamos a tener en el contexto de nuestro componente
  {path:"verInformacionView", component: VerInformacionComponent},
  {path:"editarTareaView", component:EditarTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
