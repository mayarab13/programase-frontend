import { Usuario } from '../../model/usuario';
import { CadastroService } from '../../service/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  cadastrados: Array<Usuario> = new  Array<Usuario>();

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem("token")) {
      alert("Você precisa estar logado!")
      this.router.navigate(['/home']);

    } else {
      this.router.navigate(['/listar-usuario']);
      this.findAll();
    }
  }

  findAll(){
    this.cadastroService.getAll().subscribe((cadastradosOut: Usuario[]) => {
      this.cadastrados = cadastradosOut;
    });
  }

  allUsers(){
    this.cadastroService.getAll().subscribe((cadastradosOut: Usuario[]) => {
      this.cadastrados = new Array<Usuario>();
      this.cadastrados.push(cadastradosOut[0]);
  });

}}


