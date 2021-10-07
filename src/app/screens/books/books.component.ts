import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

/* Pipes */
import { fnSearcher } from '@pipes/filter/filter.pipe';
import { takeUntil } from 'rxjs/operators';
import { Book } from './services/book/book.types';

@Component({
  selector: 'wlx-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {
  public books: Book[] = [];
  public search: string = '';
  private readonly $unsubcriber = new Subject<boolean>()
  constructor(
    private readonly activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadBooks();
  }

  ngOnDestroy() {
    this.$unsubcriber.next(true);
    this.$unsubcriber.complete()
  }

  private loadBooks(): void {
    this.activedRoute.data.pipe(
      takeUntil(this.$unsubcriber)
    ).subscribe(({ books }) => {
      this.books = books
    });
  }

  public searchBook(searcher: string): fnSearcher {
    return function (item: number): boolean {
      return item < Number(searcher)
    }
  }
}
