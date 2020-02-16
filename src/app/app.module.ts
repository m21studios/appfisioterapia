import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListapacientesComponent } from './pages/listapacientes/listapacientes.component';
import { NuevacitaComponent } from './pages/nuevacita/nuevacita.component';
import { HistorialclinicoComponent } from './pages/historialclinico/historialclinico.component';
import { ListadehistoriasComponent } from './pages/listadehistorias/listadehistorias.component';

import { FormsModule } from '@angular/forms';
import { NgTempusdominusBootstrapModule } from 'ngx-tempusdominus-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListapacientesComponent,
    NuevacitaComponent,
    HistorialclinicoComponent,
    ListadehistoriasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgTempusdominusBootstrapModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
