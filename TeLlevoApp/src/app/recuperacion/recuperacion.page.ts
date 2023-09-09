import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  constructor( private router:Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  loginRuta(){
    this.mensajeRecuperar("Enviamos la recuperacion a su email!",2000);
    this.router.navigate(['/login']);
  }

  async mensajeRecuperar(message:string, duration:number){
    const mensaje = this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    (await mensaje).present();

  }
}
