import { Usuario } from './../models/Usuario.model';
import { ConversaoService } from './../services/conversao.service';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-criptografia',
  templateUrl: './criptografia.component.html',
  styleUrls: ['./criptografia.component.css']
})
export class CriptografiaComponent implements OnInit {

  router: Router

  usuarioLogado: boolean = false
  usuario: Usuario

  listaTexto: string[]
  textoOriginal: string
  textoAlterado: string
  erro: any

  constructor(private conversaoServico:ConversaoService, router:Router) { 
    //verifica se existe um usuario logado
    if(this.usuario){
      this.usuarioLogado = true
    }
  }

  ngOnInit(): void {
  }

  converterBinario(){
    this.conversaoServico.converterBinario(this.textoOriginal).subscribe(
      (data: string[]) =>{
        this.listaTexto = data
        console.log("DataConversao >> ",data)
        this.textoAlterado = ""
        for(let parte of this.listaTexto){
            this.textoAlterado += parte
        }
      },
      (error: any) =>{
        this.erro = error
        console.log("Erro >> ",this.erro)
      }
    )
  }

  lerBinario(){
    this.conversaoServico.lerBinario(this.textoOriginal).subscribe(
      (data: string[]) =>{
        this.listaTexto = data
        console.log("DataConversao >> ",data)
        this.textoAlterado = ""
        for(let parte of this.listaTexto){
          this.textoAlterado += parte
        }

      },
      (error: any) =>{
        this.erro = error
        console.log("Erro >> ",this.erro)
      }
    )
  }

}
