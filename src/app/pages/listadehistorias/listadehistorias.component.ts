import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historias } from 'src/app/models/historias';

@Component({
  selector: 'app-listadehistorias',
  templateUrl: './listadehistorias.component.html',
  styleUrls: ['./listadehistorias.component.css']
})
export class ListadehistoriasComponent implements OnInit {

  public identificacionDelPaciente: any;
  public listadehistorias:Historias[]; 

  //public dataUrl: any = '../../../assets/basededatos/listadehistoriasclinicas.json';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarHistoriasClinicas();
  }

  consultarPaciente(){
    console.log("la identificacion del pacientes es: ", this.identificacionDelPaciente);
  }

  //Acciones
  AgregarNuevoEvento(){
    console.log("se agregara a la historia clinica un nuevo evento");
  }

  MostrarHojadeEvolucion(){
    console.log("se mostrara la evolucion del paciente");
  }

  cargarHistoriasClinicas(){
    /*this.httpClient.get(this.dataUrl).subscribe(data => {
      console.log('datos traidos del local server: ', data);
      this.listadehistorias = data as Historias[];
      console.log("la lista de las historias clinicas son: ", this.listadehistorias);
      
    })*/
  }

}
