import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-alterar-curso',
  templateUrl: './alterar-curso.component.html',
  styleUrls: ['./alterar-curso.component.css']
})
export class AlterarCursoComponent implements OnInit {

  novo: boolean = false;
  curso: Curso = new Curso(null, null, null, null, null, null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
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
    this.cursoService.getById(id).subscribe((curso: Curso) => {
      this.curso = curso;
    });
  }

  updateCurso() {
    if (!this.novo) {
      this.cursoService
        .update(this.curso)
        .subscribe((curso: Curso) => {
          this.curso = curso;
        });
      alert('Curso Atualizado');
      this.router.navigate(['/curso']);
    } else {
      alert('ERRO!');
    }
  }

}
