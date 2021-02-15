import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/service/curso.service';
import { Curso } from 'src/app/model/Curso';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar-curso',
  templateUrl: './buscar-curso.component.html',
  styleUrls: ['./buscar-curso.component.css']
})
export class BuscarCursoComponent implements OnInit {
  
  novo: boolean = false;
  curso: Curso = new Curso(null, null, null, null, null, null)
  nome: string;
  cursoLista: Curso[];

  constructor( private cursoService: CursoService, private route: ActivatedRoute ) {}

  ngOnInit() {

    let id: number = this.route.snapshot.params['id'];

    if (id === undefined) {
      this.novo = true;
    } else {
      this.cursoId(id);
      this.novo = false;
    }
  }

  cursoId(id: number){
    this.cursoService.getById(id).subscribe((cursoOut: Curso)=>{
      this.curso = cursoOut;
    })
  }

  buscar() {
    this.cursoService.buscarCurso(this.nome).subscribe((cursoOut: Curso[]) => {
      this.cursoLista= cursoOut;
      console.log(this.cursoLista);
    })

  }

}
