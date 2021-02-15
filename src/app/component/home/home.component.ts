import { Globals } from '../../model/Globals';;
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ Globals ]
})
export class HomeComponent implements OnInit {

  curso: Curso = new Curso(null, null, null, null, null, null);
  cursos: Array<Curso> = new Array<Curso>();

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    
    this.findAllCursos();
    
   }
 
   findAllCursos(){
     this.cursoService.getAll().subscribe((cursoOut: Curso[])=>{
       this.cursos = cursoOut;
     });
   }
 }

  
