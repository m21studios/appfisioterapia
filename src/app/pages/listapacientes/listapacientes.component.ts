import { Component, OnInit } from '@angular/core';
//import * as data from '../../../assets/basededatos/listapacientes.json';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../../models/pacientes';
import { Nuevopaciente } from '../../models/nuevopaciente';
import { AlmacenamientoService } from '../../../app/services/almacenamiento.service';

@Component({
  selector: 'app-listapacientes',
  templateUrl: './listapacientes.component.html',
  styleUrls: ['./listapacientes.component.css']
})
export class ListapacientesComponent implements OnInit {

  public identificacionDelPaciente: any;
  public listadepacientes:Pacientes [];

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

  public misdatos:any = [];

  
  public dataJson: any;
  //public dataUrl: any = '../../../assets/basededatos/listapacientes.json';

  constructor(private httpClient: HttpClient, public api: AlmacenamientoService) { }

  ngOnInit() {
    this.cargarListasdePacientes();
    
  }

  public cargarListasdePacientes(){
    //this.api.GetAllPacientes();
    
  }

  public consultarPaciente(){ 
    console.log("la identificacion del pacientes es: ", this.identificacionDelPaciente);
  }

  //Acciones
  public AgregarNuevaCita(){
    console.log("se agregara una nueva cita");
  }

  public AgregarNuevoEvento(){
    console.log("se agregara una nueva evento");
  }

  public ConsultarHistorial(){
    console.log("se consultara su historial");
  }

  public CargarEventosdelPaciente(){
    console.log("se consultara sus eventos");
  }

  public GuardarNuevoPaciente(){
    console.log('se registro un nuevo paciente con los siguientes datos: ',this.nuevopaciente);
    this.api.AgregarNuevoPacientes(this.nuevopaciente);
    
    setTimeout(() => {
      this.limpiarInpust();
    },2000);
  }

  public limpiarInpust(){
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




/*let peticion = self.indexedDB.open('appFisioterapia',1);
    let db: any; 
    let lastIndex = 0;

    
    
    peticion.onsuccess = function (event) { 
      
      console.log ('[onsuccess]', peticion.result); 
      db = peticion.result; // === request.result 

      var transaccion = db.transaction(["pacientes"]);
      var datos = transaccion.objectStore('pacientes');

      var keyRange = IDBKeyRange.lowerBound(0);
      var cursorRequest = datos.openCursor(keyRange);

      cursorRequest.onsuccess = function(event){
        var resultado = event.target.result;

        if(resultado === null || resultado === undefined){
          console.log('No hay Datos..',event.result);
          //event.resolve(this.misdatos);
        }else{

          this.misdatos = [];
          this.misdatos.push(resultado.value);
          this.listadepacientes = this.misdatos;

          if (resultado.value.id > lastIndex) {
            lastIndex = resultado.value.id;
          }

          resultado.continue ();
        }
      }

      cursorRequest.onerror = function (e) {
        e.reject("Something went wrong!!!");
        console.log('Error al cargar los datos de la lista de pacientes: ',e.value);
      };
    }
           

    peticion.onerror = function(event) {
      // Handle errors!
      console.log('error al descargar los datos del paciente: ',peticion);
    };*/
