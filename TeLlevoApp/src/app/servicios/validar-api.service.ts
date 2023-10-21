import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidarApiService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  
  validarUsuario(username: string) {
    return this.http.get<boolean>(`${this.baseUrl}/validar-usuario/${username}`);
  }
}
