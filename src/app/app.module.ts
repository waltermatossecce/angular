import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoAlumnoComponent } from './Components/listado-alumno/listado-alumno.component';
import { AgregarAlumnoComponent } from './Components/agregar-alumno/agregar-alumno.component';
import { AppMenuComponent } from './Components/app-menu/app-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { GraficasComponent } from './Components/graficas/graficas.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ListadoAlumnoComponent,
    AgregarAlumnoComponent,
    AppMenuComponent,
    FooterComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
