import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escribano } from '../models/escribano';

@Injectable({
  providedIn: 'root'
})
export class EscribanoService {
  link: string = 'http://localhost/colegioEscribanosProject/public/index.php/escribano/';

  constructor(private _http:HttpClient) { }
  getEscribanos():Observable<any>{
    return this._http.get(this.link);
    }

    
  public newEscribano(escribano) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(escribano);
    return this._http.post(this.link+'new', body,
      httpOption);
  }

  modificarEscribano(escribano: Escribano) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(escribano);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post(this.link + escribano.id + '/edit', body, httpOption);
  }

  borrarEscribano(id: number) {
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete((this.link + id));
  }
}
