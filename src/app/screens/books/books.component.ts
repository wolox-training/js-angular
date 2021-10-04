import { Component } from '@angular/core';

import { fnSearcher } from '@pipes/filter/filter.pipe';

@Component({
  selector: 'wlx-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  public books = new Array(40).fill(1).map((_, x) => x);
  public search: string = '';

  public searchBook(searcher: string): fnSearcher {
    return function (item: number): boolean {
      return item < Number(searcher)
    }
  }
}
