import { CursoService } from 'src/app/service/curso.service';
import { Curso } from 'src/app/model/Curso';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-deletar-curso',
  templateUrl: './deletar-curso.component.html',
  styleUrls: ['./deletar-curso.component.css']
})
export class DeletarCursoComponent implements OnInit {

  curso: Curso = new Curso(null, null, null, null, null, null);
  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
    ) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.findById(id);
  }

  findById(id: number) {
    this.cursoService.getById(id).subscribe((curso: Curso) => {
      this.curso = curso;
    });
  }

  btnSim() {
    this.cursoService.delete(this.curso.id).subscribe((res: string) => {
      alert('Deletado');
      this.router.navigate(['/curso']);
      $('#btnFechar').click();
    }, err => {
      alert('ERRO');
    });
  }

  btnNao() {
    this.router.navigate(['/curso']);
  }
}
