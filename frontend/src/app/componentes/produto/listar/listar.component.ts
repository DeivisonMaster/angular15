import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { ListarDatasource } from './listar-datasource';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Produto>;
  dataSource!: ListarDatasource;

  colunasExibidas = ['id', 'nome', 'preco', 'acao'];

  constructor(private produtoService: ProdutoService){
  }

  ngOnInit(): void {
    this.dataSource = new ListarDatasource();

    this.produtoService.listar().subscribe(produto => {
      this.dataSource.data = produto;
   });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  
}
