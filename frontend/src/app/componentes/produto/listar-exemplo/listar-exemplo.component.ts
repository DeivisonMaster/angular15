import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListarExemploDataSource, ListarExemploItem } from './listar-exemplo-datasource';

@Component({
  selector: 'app-listar-exemplo',
  templateUrl: './listar-exemplo.component.html',
  styleUrls: ['./listar-exemplo.component.css']
})
export class ListarExemploComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListarExemploItem>;
  dataSource: ListarExemploDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description'];

  constructor() {
    this.dataSource = new ListarExemploDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
