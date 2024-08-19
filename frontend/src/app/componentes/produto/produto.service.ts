import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './produto.model';
import { map, catchError, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: string = "http://localhost:3001/produtos";

  constructor(
    private msgBar: MatSnackBar, 
    private httpClient: HttpClient) { }

  exibirMensagem(msg: string): void{
    this.msgBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  criar(produto: Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(this.baseUrl, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.erroSistema(e))
    );
  }

  listar(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.baseUrl);
  }

  buscarPorId(id: number): Observable<Produto>{
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroSistema(e))
    );
  }

  editar(produto: Produto): Observable<Produto>{
    const url = `${this.baseUrl}/${produto.id}`
    return this.httpClient.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.erroSistema(e))
    );
  }

  excluir(id: number): Observable<Produto>{
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroSistema(e))
    );
  }

  mostrarNoConsole(msg: string): void{
    console.log(msg);
  }

  erroSistema(e: any): Observable<any>{
    console.log('ERRO NO SISTEMA: ', e);
    this.exibirMensagem('Erro no sistema!');
    return EMPTY
  }
}
