import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login={
    Usuario:"",
    Contrasena:""
  }

  constructor( private router:Router) { }

  ngOnInit() {
  }

  homeRuta(){
    let navigationExtras:NavigationExtras = {
      state: {usuario:this.login.Usuario}
    };
    console.log(navigationExtras);
    this.router.navigate(['/home'], navigationExtras);
  }
  
  recuperarRuta(){
    this.router.navigate(['/recuperacion'])
  }

}
