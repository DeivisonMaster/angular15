import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/componentes/produto/produto.service';
import { HeaderService } from 'src/app/componentes/template/header/header.service';

@Component({
  selector: 'app-crud-produto',
  templateUrl: './crud-produto.component.html',
  styleUrls: ['./crud-produto.component.css']
})
export class CrudProdutoComponent implements OnInit{

  constructor(
    private rota: Router,
    private produtoServico: ProdutoService,
    private headerService: HeaderService){
      headerService.headerData = {
        titulo: 'Cadastro de Produto',
        icone: 'storefront',
        rotaUrl: '/produtos'
      }
  }

  ngOnInit(): void {
  }

  novoProduto(): void{
     this.rota.navigate(['/produtos/novo'])
  }
  
}
