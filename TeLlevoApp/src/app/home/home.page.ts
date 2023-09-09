import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  usuario:string="";

  constructor(private activeroute:ActivatedRoute) 
  {
    this.activeroute.paramMap.subscribe(params => {
      if (window.history.state.usuario) {
        this.usuario = window.history.state.usuario;
      }
    });
  }

}
