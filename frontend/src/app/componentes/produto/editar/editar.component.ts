import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  produto!: Produto

  constructor(
    private rota: Router, 
    private produtoService: ProdutoService, 
    private dadosNavegacao: ActivatedRoute){
  }

  ngOnInit(): void {
    const id = this.dadosNavegacao.snapshot.paramMap.get('id') // recupera id da navegação

    this.produtoService.buscarPorId(+id!).subscribe(produtoPesquisa => {  // +! faz conversão
      console.log('Produto Editar: ', produtoPesquisa);
      this.produto = produtoPesquisa
    });
  }

  editar(): void {
      this.produtoService.editar(this.produto).subscribe(() => {
          this.produtoService.exibirMensagem("Produto atualizado com sucesso!")
          this.rota.navigate(['/produtos'])
      })
  }

  cancelar(): void{
    this.rota.navigate(['/produtos'])
  }

}
