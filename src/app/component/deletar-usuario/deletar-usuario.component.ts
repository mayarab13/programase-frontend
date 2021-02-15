import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario(null, null, null, null, null);

  constructor(
    private route: ActivatedRoute,
    private usuarioService: CadastroService,
    private router: Router
    ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.findById(id);
  }

  findById(id: number) {
    this.usuarioService.getById(id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
    });
  }

  btnSim() {
    this.usuarioService.delete(this.usuario.id).subscribe((response: string) => {
      alert('Deletado');
      this.router.navigate(['/listar-usuario']);
    }, err => {
      alert('ERRO');
    });
  }

  btnNao() {
    this.router.navigate(['/listar-usuario']);
  }
}
