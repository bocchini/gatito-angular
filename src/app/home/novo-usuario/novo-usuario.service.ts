import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  urlApi = 'http://localhost:3000/user/signup';
  constructor(private httpCliente: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpCliente.post(this.urlApi, novoUsuario);
  }
}
