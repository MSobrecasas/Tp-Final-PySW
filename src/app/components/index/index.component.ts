import { Component, OnInit } from '@angular/core';
import {RouterLink, Router} from '@angular/router';
import * as  pushJS from 'push.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  //this.push();
  }
  navegar(){
    //this.route.navigateByUrl('/registro')
  }
  
  push(){
    pushJS.default.create("Bienvenido!", {
      body: "Esta es la pagina de Escribanos",
      icon: './favicon.ico',
      timeout: 20000,
      onClick: function () {
          window.focus();
          this.close();
      }
  })
  }
  
}
