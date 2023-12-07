import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { MapaPageRoutingModule } from './mapa-routing.module';

import { MapaPage } from './mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDwlIjGes9cbmTlr4TiZDl9zt9tkf5JwQU',
    }),
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
