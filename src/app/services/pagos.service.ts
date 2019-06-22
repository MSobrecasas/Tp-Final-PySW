import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagos } from '../models/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  link: string = 'http://localhost/colegioEscribanosProject/public/index.php/pagos/';

  constructor(private _http: HttpClient) { }

  getsListaPagos(): Observable<any> {
    return this._http.get(this.link);
  }

  public newPago(pago) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(pago);
    return this._http.post(this.link + 'new', body,
      httpOption);
  }

  modificarPagos(pagos: Pagos) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(pagos);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post(this.link + pagos.id + '/edit', body, httpOption);
  }

  borrarPagos(id: number) {
    //utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete((this.link + id));
  }
}
