import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Novedades } from '../models/novedades';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  link: string = 'http://localhost/colegioEscribanosProject/public/index.php/novedades/';

  constructor(private _http: HttpClient) { }
  getsListaNovedades(): Observable<any> {
    return this._http.get(this.link);
  }

  public newNovedades(novedadNovedades) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(novedadNovedades);
    return this._http.post(this.link + 'new', body,
      httpOption);
  }

  modificarNovedades(novedades: Novedades) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(novedades);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post(this.link + novedades.id + '/edit', body, httpOption);
  }

  borrarNovedades(id: number) {
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete((this.link + id));
  }
}
