import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { Produto } from "../produto.model";
import { ProdutoService } from '../produto.service';


export class ListarDatasource extends DataSource<Produto>{
    data!: Produto[];
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;

    constructor() {
        super();
    }

    connect(): Observable<Produto[]> {
        if (this.paginator && this.sort) {
          // Combine everything that affects the rendered data into one update
          // stream for the data-table to consume.
          return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
            .pipe(map(() => {
              return this.getPagedData(this.getSortedData([...this.data ]));
            }));
        } else {
          throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }

    disconnect(): void {}

    private getPagedData(data: Produto[]): Produto[] {
        if (this.paginator) {
          const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
          return data.splice(startIndex, this.paginator.pageSize);
        } else {
          return data;
        }
      }

      private getSortedData(data: Produto[]): Produto[] {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
          return data;
        }
    
        return data.sort((a, b) => {
          const isAsc = this.sort?.direction === 'asc';
          switch (this.sort?.active) {
            case 'nome': return compare(a.nome, b.nome, isAsc);
            case 'preco': return compare(a.preco, b.preco, isAsc);
            default: return 0;
          }
        });
      }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }