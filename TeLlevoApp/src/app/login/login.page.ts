import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Animation } from '@ionic/core';
import { AnimationController } from '@ionic/angular';
import { GuardarUsuarioService } from '../servicios/guardar-usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulario!: FormGroup;
  login = { Usuario: '', Contrasena: '' 
  }

  constructor( private router:Router, private animacionControl:AnimationController, private guardarUsuario:GuardarUsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      Usuario: ['', Validators.required],
      Contrasena: ['', Validators.required]
    });
  }

  ionViewDidEnter(){
    this.animacionTitulo();
  }

  animacionTitulo(){
    const titulo = document.querySelector('#titulo');
    if(titulo){
      const animaniac:Animation = this.animacionControl.create()
      .addElement(titulo)
      .duration(2500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('color', 'orange', 'var(--color)')
    animaniac.play();
    }
  }
  homeRuta(){
    let navigationExtras:NavigationExtras = {
      state: {usuario:this.login.Usuario}
    };
    console.log(navigationExtras);
    this.guardarUsuario.capturarUsuario(this.login.Usuario);
    this.router.navigate(['/home'], navigationExtras);
  }
  
  recuperarRuta(){
    this.router.navigate(['/recuperacion'])
  }

}
