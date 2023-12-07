import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  usuario:string="";

  constructor(private router:Router) 
  {
    const state = window.history.state;
    if (state && state.usuario) {
      this.usuario = state.usuario;
    }
  }

  almapa(){
    this.router.navigate(['/mapa'])
  }
}
