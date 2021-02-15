import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {

  
  novo: boolean = false;
  usuario: Usuario = new Usuario(null, null, null, null, null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: CadastroService
  ) {}

  ngOnInit(): void {

    let id: number = this.route.snapshot.params['id'];

    if (id === undefined) {
      this.novo = true;
    } else {
      this.findById(id);
      this.novo = false;
    }

  }
  findById(id: number) {
    this.usuarioService.getById(id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
  }

  alterarUsuario() {
    if (!this.novo) {
      this.usuarioService
        .update(this.usuario)
        .subscribe((usuario: Usuario) => {
          this.usuario = usuario;
        });
      alert('Usuário Atualizado');
      this.router.navigate(['/listar-usuario']);
    } else {
      alert('ERRO!');
    }
  }

}