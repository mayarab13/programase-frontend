import { ContatoComponent } from './component/contato/contato.component';
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CentralDeAjudaComponent } from './component/central-de-ajuda/central-de-ajuda.component';
import { CursoComponent } from './component/curso/curso.component';
import { CadastrarCursoComponent } from './component/cadastrar-curso/cadastrar-curso.component';
import { AlterarCursoComponent } from './component/alterar-curso/alterar-curso.component';
import { DeletarCursoComponent } from './component/deletar-curso/deletar-curso.component';
import { DeletarUsuarioComponent } from './component/deletar-usuario/deletar-usuario.component';
import { AlterarUsuarioComponent } from './component/alterar-usuario/alterar-usuario.component';
import { BuscarCursoComponent } from './component/buscar-curso/buscar-curso.component';
import { PaginaCursoComponent } from './component/pagina-curso/pagina-curso.component';
import { CadastrarUsuarioComponent } from './component/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './component/listar-usuario/listar-usuario.component';
import { CausasComponent } from './component/causas/causas.component';
import { HomeComponent } from './component/home/home.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'buscar-curso', component: BuscarCursoComponent},
  {path: 'cadastrar-curso', component: CadastrarCursoComponent},
  {path: 'cadastrar-usuario', component: CadastrarUsuarioComponent},
  {path: 'listar-usuario', component: ListarUsuarioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'central-de-ajuda', component: CentralDeAjudaComponent},
  {path: 'alterar-curso/', component: AlterarCursoComponent},
  {path: 'alterar-curso/:id', component: AlterarCursoComponent},
  {path: 'alterar-usuario/:id', component: AlterarUsuarioComponent},
  {path: 'deletar-curso/:id', component: DeletarCursoComponent},
  {path: 'deletar-usuario/:id', component: DeletarUsuarioComponent},
  {path: 'pagina-curso/:id', component: PaginaCursoComponent},
  {path: 'causas', component: CausasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
