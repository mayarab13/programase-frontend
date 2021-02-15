import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/curso');
  }

  getById(id: number) {
    return this.http.get(`http://localhost:8080/curso/${id}`);
  }

  insert(curso: Curso) {
    return this.http.post(`http://localhost:8080/curso`, curso);
  }

  update(curso: Curso) {
    return this.http.put(`http://31.220.50.25:8080/curso`, curso);
  }

  delete(id: number) {
    return this.http.delete(`http://31.220.50.25:8080/curso/${id}`);
  }

  buscarCurso(nome: string) {
    return this.http.get(`http://31.220.50.25:8080/curso-busca/${nome}`);
  }
}
