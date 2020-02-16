import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { ListapacientesComponent } from '../app/pages/listapacientes/listapacientes.component';
import { NuevacitaComponent } from '../app/pages/nuevacita/nuevacita.component';
import { HistorialclinicoComponent } from '../app/pages/historialclinico/historialclinico.component';
import { ListadehistoriasComponent } from '../app/pages/listadehistorias/listadehistorias.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'historialclinico',
    component: HistorialclinicoComponent
  },
  {
    path: 'listadehistorias',
    component: ListadehistoriasComponent
  },
  {
    path: 'listapacientes',
    component: ListapacientesComponent
  },
  {
    path: 'nuevacita',
    component: NuevacitaComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
