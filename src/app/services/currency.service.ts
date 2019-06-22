import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  apiKey='b0c27bf40b9cefe0f2ef';
  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI=`https://free.currconv.com/api/v7/convert?apiKey=${this.apiKey}&q=`
  }

  getCurrency(moneda:string){
    return this.http.get(`${this.URI}${moneda}&compact=ultra`)
  }
}
