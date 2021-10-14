import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpCliente: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpCliente.post(`${API}user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeDoUsuario: string) {
    return this.httpCliente.get(`${API}user/exists/${nomeDoUsuario}`);
  }
}
