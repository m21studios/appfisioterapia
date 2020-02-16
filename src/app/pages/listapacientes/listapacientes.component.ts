import { Component, OnInit } from '@angular/core';
//import * as data from '../../../assets/basededatos/listapacientes.json';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../../models/pacientes';
import { Nuevopaciente } from '../../models/nuevopaciente';

@Component({
  selector: 'app-listapacientes',
  templateUrl: './listapacientes.component.html',
  styleUrls: ['./listapacientes.component.css']
})
export class ListapacientesComponent implements OnInit {

  public identificacionDelPaciente: any;
  public listadepacientes:Pacientes[];

  public nuevopaciente:Nuevopaciente = {
    identificacion:'',
    nombres: '',
    apellidos: '',
    telefono: '',
    dianacimiento: '',
    mesnacimiento: '',
    anionacimiento: '',
    fechadenacimiento: '',
    edad: '',
    genero: '',
    embarazada: ''
  }

  
  public dataJson: any;
  public dataUrl: any = '../../../assets/basededatos/listapacientes.json';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarListasdePacientes();
  }

  cargarListasdePacientes(){
    this.httpClient.get(this.dataUrl).subscribe(data => {
      console.log('datos traidos del local server: ', data);
      this.listadepacientes = data as Pacientes[];
      console.log("la lista de pacientes es: ", this.listadepacientes);
      
    })
  }

  consultarPaciente(){ 
    console.log("la identificacion del pacientes es: ", this.identificacionDelPaciente);
  }

  //Acciones
  AgregarNuevaCita(){
    console.log("se agregara una nueva cita");
  }

  AgregarNuevoEvento(){
    console.log("se agregara una nueva evento");
  }

  ConsultarHistorial(){
    console.log("se consultara su historial");
  }

  CargarEventosdelPaciente(){
    console.log("se consultara sus eventos");
  }

  GuardarNuevoPaciente(){
    
    this.nuevopaciente.fechadenacimiento = this.nuevopaciente.dianacimiento+'/'+this.nuevopaciente.mesnacimiento+'/'+this.nuevopaciente.anionacimiento;
    console.log("el nuevo paciente es: ",this.nuevopaciente);

  }

  limpiarInpust(){
    this.nuevopaciente.identificacion = '';
    this.nuevopaciente.nombres = '';
    this.nuevopaciente.apellidos = '';
    this.nuevopaciente.telefono = '';
    this.nuevopaciente.dianacimiento = '';
    this.nuevopaciente.mesnacimiento = '';
    this.nuevopaciente.anionacimiento = '';
    this.nuevopaciente.fechadenacimiento = '';
    this.nuevopaciente.edad = '';
    this.nuevopaciente.genero = '';
    this.nuevopaciente.embarazada = '';
  }

}
