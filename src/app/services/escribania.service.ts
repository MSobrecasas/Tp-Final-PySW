import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escribania } from '../models/escribania';

@Injectable({
  providedIn: 'root'
})
export class EscribaniaService {
  link: string = 'http://localhost/colegioEscribanosProject/public/index.php/escribania/';

  constructor(private _http: HttpClient) { }

  getEscribanias(): Observable<any> {
    return this._http.get(this.link);
  }

  public newEscribania(escribania) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(escribania);
    return this._http.post(this.link+'new', body,
      httpOption);
  }

  modificarEscribania(escribania: Escribania) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(escribania);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post(this.link + escribania.id + '/edit', body, httpOption);
  }

  borrarEscribania(id: number) {
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete((this.link + id));
  }
}
