import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardarUsuarioService } from '../servicios/guardar-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class JuanchoGuard implements CanActivate {
  constructor(private userService: GuardarUsuarioService, private router: Router) {}

  canActivate(): boolean {
    const usuarioCapturado = this.userService.obtenerUsuario();
    if (usuarioCapturado) {
      return true; // Usuario capturado, permitir acceso
    } else {
      this.router.navigate(['/error404']); // Usuario no capturado, redirigir a la página de error
      return false;
    }
  }
}
