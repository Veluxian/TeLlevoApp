import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  lat = -33.4330797;
  lng = -70.615139;

  constructor() { }

  ngOnInit() {
  }

}
