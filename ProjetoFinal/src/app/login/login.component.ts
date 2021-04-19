import { Router } from '@angular/router';
import { Usuario } from './../models/Usuario.model';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  router: Router
  usuario: Usuario[]
  erro: any

  login: string
  senha: string
  
  constructor(private usuarioServico:UsuarioService, router: Router) { 
    this.router = router
  }

  ngOnInit(): void {
  }
  
  verificarLogin(){
    this.usuarioServico.getUsuarios().subscribe(
      (data: Usuario[]) =>{
        this.usuario = data
        if(this.usuario){
          for(let aux of this.usuario){
            if((this.login === aux.login) && (this.senha === aux.senha)){
              this.router.navigate(['/criptografia']);
            }
          }
        }
      },
      (error: any) =>{
        this.erro = error
        console.log("Erro: " + this.erro)
      }
    )
  }

}
