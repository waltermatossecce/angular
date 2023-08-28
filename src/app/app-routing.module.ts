import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAlumnoComponent } from './Components/listado-alumno/listado-alumno.component';
import { AgregarAlumnoComponent } from './Components/agregar-alumno/agregar-alumno.component';
import { GraficasComponent } from './Components/graficas/graficas.component';

const routes: Routes = [
  {path:'',redirectTo:"/lista",pathMatch:'full'},
  {path:'lista',component:ListadoAlumnoComponent},
  {path:'form',component:AgregarAlumnoComponent},
  {path:'form/:id',component:AgregarAlumnoComponent},
  {path:'graficas',component:GraficasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
