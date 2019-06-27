import { Component, OnInit } from '@angular/core';
import {RouterLink, Router} from '@angular/router'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
    
  }
  navegar(){
    this.route.navigateByUrl('/registro')
  }
  
  
}
