import { Component, OnInit  } from '@angular/core';

import * as moment from 'moment';
import { Citas } from '../../models/citas';
import { AlmacenamientoService } from '../../services/almacenamiento.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public numerodepacientes:any = 0;
  public numerodecitasparahoy: any = 0;

  public listadecitas:Citas[];
  public data: any;
  public bdNombre:any = 'appFisioterapia';
  public bdVersion:any = 1;
  
  dataIndexed:any;

  constructor(public api: AlmacenamientoService) {
    
  }

  ngOnInit() {
    this.cargarNumerodeCitas();
    this.cargarNumerodePacientes();
    this.cargarCitasParaHoy();
  }

 

  public cargarNumerodeCitas(){
    //this.numerodecitasparahoy = 0;
    let request = self.indexedDB.open(this.bdNombre,this.bdVersion);
    let db: any;
    let transaccion: any; 
    let citasAlmacenadas: any;
    let datos:any = [];

    request.onsuccess = function(event){
      let resultados:any;
      db = request.result;
      transaccion = db.transaction(['citas'],'readonly');
      citasAlmacenadas = transaccion.objectStore('citas');

      let totalpacientes = citasAlmacenadas.count();

      totalpacientes.onsuccess = function() {
        this.numerodecitasparahoy = totalpacientes.result;
        console.log('Total Citas>',this.numerodecitasparahoy);
        document.querySelector("#totalcitas").innerHTML = this.numerodecitasparahoy;
      }
      
    }
     

    request.onerror = function(event){
      console.log ('[onerror]', request.error); 
    }
  }

  public cargarNumerodePacientes(){
    //this.numerodepacientes = 0;
    let request = self.indexedDB.open(this.bdNombre,this.bdVersion);
    let db: any;
    let transaccion: any; 
    let pacientesAlmacenadas: any;
    let datos:any = [];

    request.onsuccess = function(event){
      let resultados:any;
      db = request.result;
      transaccion = db.transaction(['pacientes'],'readonly');
      pacientesAlmacenadas = transaccion.objectStore('pacientes');

      let totalpacientes = pacientesAlmacenadas.count();

      totalpacientes.onsuccess = function() {
        this.numerodepacientes = totalpacientes.result;
        console.log('Total Pacientes>',this.numerodepacientes);
        document.querySelector("#totalpacientes").innerHTML = this.numerodepacientes;
      }
      
    }
     

    request.onerror = function(event){
      console.log ('[onerror]', request.error); 
    }
  }

  public cargarCitasParaHoy(){

    let request = self.indexedDB.open(this.bdNombre,this.bdVersion);
    let db: any;
    let transaccion: any; 
    let citasAlmacenadas: any;
    let datos:any = [];

    request.onsuccess = function(event){
      let resultados:any;
      db = request.result;
      transaccion = db.transaction(["citas"], "readonly");
      citasAlmacenadas = transaccion.objectStore('citas');
      

      resultados = citasAlmacenadas.openCursor().onsuccess = function(event){
        var cursor = event.target.result;

        if (cursor) {
          console.log(cursor.value);
          datos.push(cursor.value);
          cursor.continue();
          
        } else {
          var outerHTML = '';
  
          for (var key in datos){
            outerHTML += `<tr>
              <td>`+datos[key].identificacion+`</td>
              <td>`+datos[key].nombres+`</td>
              <td>`+datos[key].apellidos+`</td>
              <td>`+datos[key].fecha+`</td>
              <td>`+datos[key].hora+`</td>
            </tr>`;
          }
          datos = [];
          document.querySelector("#dataIndexed").innerHTML = outerHTML;
          
          console.log("¡No hay más registros disponibles!");
        }
      }
    }
  
    request.onerror = function(event){
      console.log ('[onerror]', request.error); 
    }

  }

  

}
