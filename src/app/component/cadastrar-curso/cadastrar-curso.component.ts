import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})

export class CadastrarCursoComponent implements OnInit {

  novo: boolean = false;
  curso: Curso = new Curso(null, null, null, null, null, null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {

    if (!localStorage.getItem("token")) {
      alert("Você precisa estar logado!")
      this.router.navigate(['/home']);

    } else {
      this.router.navigate(['/cadastrar-curso']);
    }

    let id: number = this.route.snapshot.params["id"];

    if (id === undefined) {
      this.novo = true;
    } else {
      this.findById(id);
      this.novo = false;
    }

  }

  findById(id: number) {
    this.cursoService.getById(id).subscribe((curso: Curso) => {
      this.curso = curso;
    });
  }

  cadastrarCurso() {
    if (this.novo) {
      this.cursoService
        .insert(this.curso)
        .subscribe((curso: Curso) => {
          this.curso = curso;
          this.novo = false;
        });
      alert("Cadastrado");
      this.router.navigate(['/curso']);
    } else {
      alert("Curso já existe!");
    }
  }

}
