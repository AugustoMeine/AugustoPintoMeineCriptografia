import { Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  router: Router
  cadastradoNoBanco: boolean
  erro: any

  idUsuario: number
  nome: string
  login: string
  senha: string

  constructor(private usuarioServico: UsuarioService, router: Router) { 
    this.router = router
  }

  ngOnInit(): void {
  }

  adicionaUsuario(){
    if(this.nome == null || this.login == null || this.senha==null){
      this.cadastradoNoBanco = false
    }
    else{
      this.usuarioServico.adicionaUsuario(this.nome,this.login,this.senha).subscribe(
        (data: boolean) =>{
          this.cadastradoNoBanco = data 
          if(this.cadastradoNoBanco){
            this.router.navigate(['']);
          }         
        },
        (error: any) =>{
          this.erro = error
          console.log("Erro >> " + this.erro)
        }
      )
    }    
  }

  deletaUsuario(){
    if(this.nome == null || this.login == null || this.senha==null){
      this.cadastradoNoBanco = false
    }
    else{
      this.usuarioServico.deletaUsuario(this.nome).subscribe(
        (data: boolean) =>{
          this.cadastradoNoBanco = data
          console.log("Delete >> " + this.cadastradoNoBanco)
          this.nome = null
          this.login = null
          this.senha = null        
        },
        (error: any) =>{
          this.erro = error
          console.log("Erro >> " + this.erro)
          this.nome = null
          this.login = null
          this.senha = null
        }
      )
    }    
  }

}
