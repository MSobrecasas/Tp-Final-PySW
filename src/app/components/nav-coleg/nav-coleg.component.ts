import { Component, OnInit } from '@angular/core';
import { HeaderComponent} from './../header/header.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-nav-coleg',
  templateUrl: './nav-coleg.component.html',
  styleUrls: ['./nav-coleg.component.css']
})
export class NavColegComponent implements OnInit{
  
  constructor() { }

  ngOnInit() {
  }
  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
}
