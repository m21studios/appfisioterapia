import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Citas } from '../../models/citas';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //@Output() modal: EventEmitter<any> = new EventEmitter();

  public numerodepacientes:any;
  public numerodecitasparahoy: any;

  public listadecitas:Citas[];

 

  public dataUrl: any = '../../../assets/basededatos/listadecitas.json';

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    this.cargarNumerodeCitas();
    this.cargarNumerodePacientes();
    this.cargarCitasParaHoy();
  }

 

  cargarNumerodeCitas(){
    //this.numerodecitasparahoy = 5;
  }

  cargarNumerodePacientes(){
    this.numerodepacientes = 7;
  }

  cargarCitasParaHoy(){
    console.log("informacion de las citas asignadas para el dia de hoy: ", moment.now());
    this.httpClient.get(this.dataUrl).subscribe(data => {
      
      this.listadecitas = data as Citas[];
      console.log("las citas asignadas para hoy son: ", this.listadecitas);
      console.log("el numero de citas de hoy es: ", this.listadecitas.length);
      this.numerodecitasparahoy = this.listadecitas.length;
    })

  }


  

}
