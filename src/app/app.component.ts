import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlmacenamientoService } from '../app/services/almacenamiento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app-fisioterapia';
  activar:boolean;

  constructor( 
    public navegar : Router, 
    public almacenamiento : AlmacenamientoService
    ) { 
    this.activar = true;
    
    
  }

  ngOnInit() {
    this.almacenamiento.comprobarIndexdb();
    this.almacenamiento.AbrirBaseDeDatos();
  }

  iradasboard(){
    this.activar = false;
    this.navegar.navigate(['/dashboard']);
  }

  nuevaCita(){
    this.activar = false;
    this.navegar.navigate(['/nuevacita']);
  }

  listadeHistorias(){
    this.activar = false;
    this.navegar.navigate(['/listadehistorias']);
  }

  listadePacientes(){
    this.activar = false;
    this.navegar.navigate(['/listapacientes']);
  }
}
