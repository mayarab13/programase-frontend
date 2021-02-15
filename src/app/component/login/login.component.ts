// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Usuario } from 'src/app/model/usuario';
// import { Token } from 'src/app/model/Token';
// import { LoginService } from 'src/app/service/login.service';
// import * as $ from 'jquery';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   usuario = new Usuario(0, "", "", "", "");
//   constructor(
//     private router: Router,
//     private loginService: LoginService) {}

//   ngOnInit() {}

//   logar() {
//       this.loginService.login(this.usuario).subscribe(
//         (res: Token) => {
//           localStorage.setItem('token', res.token);
//           this.router.navigate(['/sobre-nos']);
//           $('#btnFecharUsuario').click();
//         },
//         error => {
//           alert('Login inválido');
//           console.log(error.status);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Token } from 'src/app/model/Token';
import { LoginService } from 'src/app/service/login.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario(0, "", "", "", "");
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    
   }

  logar() {
    this.loginService.login(this.usuario).subscribe(
      (res: Token) => {
        localStorage.setItem('token', res.token);
        $('#btnFecharLogin').click();
        this.router.navigate(['/sobre-nos']);
      },
      error => {
        alert('Login inválido');
        console.log(error.status);
      });
  }

  

}

