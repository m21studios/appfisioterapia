import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class IdbserviceService {

  public dbNombre:any = "appFisioterapia";
  public dbVersion:any = 1;
  private _dbPromise:any;

  constructor() { }

 
}
