import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *  as moment from 'moment';
import { Pacientes } from '../../models/pacientes';
import { Citas } from '../../models/citas';
import { AlmacenamientoService } from '../../services/almacenamiento.service';

@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.css']
})
export class NuevacitaComponent implements OnInit {

  
  identificacionDelPaciente: string;
  public pacientes:Pacientes[];

  datosDelPaciente:Citas = {
    identificacion: '',
    nombres: '',
    apellidos: '',
    fecha: '',
    hora:'',
    telefono: ''
  } 

  public bdNombre:any = 'appFisioterapia';
  public bdVersion:any = 1;

  pacienteencontrado:boolean = false;

  //public dataUrl: any = '../../../assets/basededatos/listapacientes.json';

  constructor(private httpClient: HttpClient, public api: AlmacenamientoService) { }

  ngOnInit() {
    //this.consultarPaciente();
  }

  public consultarPaciente(){
    let data = this.identificacionDelPaciente;
    let request = self.indexedDB.open(this.bdNombre,this.bdVersion);
    console.log('la identificacion del pacientes: ',data);

    
    request.onsuccess = function(event){
      
      var db = request.result;
      var transaccion = db.transaction(['pacientes'],'readonly');
      var consulta = transaccion.objectStore('pacientes');

      var myIndex = consulta.index('identificacion'); 
      var getRequest = myIndex.get(data);
  
      getRequest.onsuccess = function() {
        console.log('la busqueda del paciente es: ',getRequest.result);
      }
    }
    
    
    
  }

  public cargarListasdePacientes(){

  }

  asignarValores(){
    //this.datosDelPaciente.identificacion
  }

  public AsignarNuevaCita(){
    console.log('Se asignara una nueva cita');
    this.api.AgregarNuevaCita(this.datosDelPaciente);

    setTimeout(()=>{
      this.LimpiarCampos();
    },2000);
  }

  public LimpiarCampos(){
    this.datosDelPaciente.identificacion = '';
    this.datosDelPaciente.nombres = '';
    this.datosDelPaciente.apellidos = '';
    this.datosDelPaciente.fecha = '';
    this.datosDelPaciente.hora = '';
    this.datosDelPaciente.telefono = '';
  }

}
