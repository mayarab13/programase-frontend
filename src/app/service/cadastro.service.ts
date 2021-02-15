import { Usuario } from '../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get("http://localhost:8080/usuario");
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/usuario/${id}`);
  }

  insert(usuario: Usuario) {
    return this.http.post(`http://localhost:8080/usuario`, usuario);
  }

  update(usuario: Usuario) {
    return this.http.put(`http://localhost:8080/usuario`, usuario);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/usuario/${id}`);
  }

}


