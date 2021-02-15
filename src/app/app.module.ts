import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './component/contato/contato.component';
import { CorpoComponent } from './component/corpo/corpo.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { SobreNosComponent } from './component/sobre-nos/sobre-nos.component';
import { CadastroService } from './service/cadastro.service';
import { LoginComponent } from './component/login/login.component';
import { LoginService } from './service/login.service';
import { CentralDeAjudaComponent } from './component/central-de-ajuda/central-de-ajuda.component';
import { CursoComponent } from './component/curso/curso.component';
import { CursoService } from './service/curso.service';
import { AlterarCursoComponent } from './component/alterar-curso/alterar-curso.component';
import { CadastrarCursoComponent } from './component/cadastrar-curso/cadastrar-curso.component';
import { DeletarCursoComponent } from './component/deletar-curso/deletar-curso.component';
import { DeletarUsuarioComponent } from './component/deletar-usuario/deletar-usuario.component';
import { AlterarUsuarioComponent } from './component/alterar-usuario/alterar-usuario.component';
import { BuscarCursoComponent } from './component/buscar-curso/buscar-curso.component';
import { PaginaCursoComponent } from './component/pagina-curso/pagina-curso.component';
import { CadastrarUsuarioComponent } from './component/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './component/listar-usuario/listar-usuario.component';
import { CausasComponent } from './component/causas/causas.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    CorpoComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent,
    SobreNosComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    LoginComponent,
    CentralDeAjudaComponent,
    CursoComponent,
    AlterarCursoComponent,
    CadastrarCursoComponent,
    DeletarCursoComponent,
    DeletarUsuarioComponent,
    AlterarUsuarioComponent,
    BuscarCursoComponent,
    PaginaCursoComponent,
    CausasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CadastroService, LoginService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }


