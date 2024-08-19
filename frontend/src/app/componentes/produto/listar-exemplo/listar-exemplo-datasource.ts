import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ListarExemploItem {
  description: string;
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListarExemploItem[] = [
  {id: 1, name: 'Hydrogen', description: 'hello'},
  {id: 2, name: 'Helium', description: 'hello'},
  {id: 3, name: 'Lithium', description: 'hello'},
  {id: 4, name: 'Beryllium', description: 'hello'},
  {id: 5, name: 'Boron', description: 'hello'},
  {id: 6, name: 'Carbon', description: 'hello'},
  {id: 7, name: 'Nitrogen', description: 'hello'},
  {id: 8, name: 'Oxygen', description: 'hello'},
  {id: 9, name: 'Fluorine', description: 'hello'},
  {id: 10, name: 'Neon', description: 'hello'},
  {id: 11, name: 'Sodium', description: 'hello'},
  {id: 12, name: 'Magnesium', description: 'hello'},
  {id: 13, name: 'Aluminum', description: 'hello'},
  {id: 14, name: 'Silicon', description: 'hello'},
  {id: 15, name: 'Phosphorus', description: 'hello'},
  {id: 16, name: 'Sulfur', description: 'hello'},
  {id: 17, name: 'Chlorine', description: 'hello'},
  {id: 18, name: 'Argon', description: 'hello'},
  {id: 19, name: 'Potassium', description: 'hello'},
  {id: 20, name: 'Calcium', description: 'hello'},
];

/**
 * Data source for the ListarExemplo view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListarExemploDataSource extends DataSource<ListarExemploItem> {
  data: ListarExemploItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ListarExemploItem[]> {
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

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ListarExemploItem[]): ListarExemploItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListarExemploItem[]): ListarExemploItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
