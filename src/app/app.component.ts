import { Component, ViewChild } from '@angular/core';
import {HeaderComponent} from './components/header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tp-Final-PySW';
  fondo:string = "container mb-1";
  fondo2: string ="card border-0 shadow my-5"
  fondo3: string ="card-body"
  pantallaSM(){
    //console.log("...")
    if(document.documentElement.clientWidth<700){
      this.fondo = 'row justify-content-center bg-white pt-5 mb-2';
      this.fondo2 ='col-12';
      this.fondo3 ='col-12';
    }else{
      this.fondo = 'container mb-1';
      this.fondo2 ='card border-0 shadow my-5';
      this.fondo3 ='card-body';
    }
  }
  
}
