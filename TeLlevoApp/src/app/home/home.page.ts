import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  usuario:string="";

  constructor() 
  {
    const state = window.history.state;
    if (state && state.usuario) {
      this.usuario = state.usuario;
    }
  }

}
