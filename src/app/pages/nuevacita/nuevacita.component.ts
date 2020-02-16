import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *  as moment from 'moment';
import { Pacientes } from '../../models/pacientes';
import { Citas } from '../../models/citas';

@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.css']
})
export class NuevacitaComponent implements OnInit {

  
  identificacionDelPaciente: any;
  public pacientes:Pacientes[];

  datosDelPaciente:Citas = {
    identificacion: '',
    nombres: '',
    apellidos: '',
    fecha: '',
    hora:'',
    telefono: ''
  } 

  pacienteencontrado:boolean = false;

  public dataUrl: any = '../../../assets/basededatos/listapacientes.json';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  
  }

  consultarPaciente(){
    console.log("la identificacion del pacientes es: ", this.identificacionDelPaciente);
    this.cargarListasdePacientes();
  }

  cargarListasdePacientes(){
    this.pacienteencontrado = true;
    this.httpClient.get(this.dataUrl).subscribe(data => {
      console.log('datos traidos del local server: ', data);
      this.pacientes = data as Pacientes[];
      console.log("la lista de pacientes es: ", this.pacientes);
      
    })
  }

  asignarValores(){
    //this.datosDelPaciente.identificacion
  }

}
