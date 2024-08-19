import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit{

  produto: Produto = {
    nome: '',
    preco: 0
  }

  constructor(
    private rota: Router,
    private produtoServico: ProdutoService){}

  ngOnInit(): void {
  }

  cadastrar(): void{
    this.produtoServico.criar(this.produto).subscribe(() => {
      this.produtoServico.exibirMensagem('Produto Cadastrado com Sucesso!');
      this.rota.navigate(['/produtos']);
    });
  }

  cancelar(): void{
    this.rota.navigate(['/produtos']);
  }


  /*
  meuId: string = 'meuNovoId';

  ngOnInit(): void {
  }

  fazerAlgo(): void{
    console.log('fazendo algo...')
  }
    */
}
