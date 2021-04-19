import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversaoService {

  constructor(private http: HttpClient) { 

  }

  public converterBinario(texto: string):Observable<any>{
    return(this.http.get('http://localhost:8080/Conversao/Converter/'+ texto))
  }

  public lerBinario(texto: string):Observable<any>{
    return(this.http.get('http://localhost:8080/Conversao/Ler/'+ texto))
  }
}
