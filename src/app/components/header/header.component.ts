import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  btn;
  
  constructor(public route: Router,
    public loginService: LoginService) { 
    
  }
  
  ngOnInit() {

  }
  inicio() {

  }
  public openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    this.btn = document.getElementById('cardv');
    this.btn.addEventListener("click",
    (e:Event) => this.closeNav())
  }

  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

logout(){
  //localStorage.removeItem('currentUser');
  this.loginService.logout();
  }
}