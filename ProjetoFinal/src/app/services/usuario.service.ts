import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {

  }

  public getUsuarios():Observable<any>{
    return(this.http.get('http://localhost:8080/Usuario'))
  }

  public getUsuario(id:number):Observable<any>{
    return(this.http.get('http://localhost:8080/Usuario/'+ id))
  }

  public adicionaUsuario(nome: string, login: string, senha: string):Observable<any>{
    return(this.http.get('http://localhost:8080/Usuario/Adicionar/'+ nome + '/' + login + '/' + senha))
  }

  public deletaUsuario(nome: string):Observable<any>{
    return(this.http.get('http://localhost:8080/Usuario/Deletar/'+ nome))
  }

  public alteraUsuario(nome: string, login: string, senha: string):Observable<any>{
    return(this.http.get('http://localhost:8080/Usuario/Alterar/'+ nome + '/' + login + '/' + senha))
  }
}
