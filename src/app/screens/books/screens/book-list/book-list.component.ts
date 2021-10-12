import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/* types */
import { Book } from '@books/services/book/book.types';
import { fnSearcher } from '@pipes/filter/filter.pipe';

@Component({
  selector: 'wlx-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
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
    return function (book: Book): boolean {
      return book?.title.toLowerCase().includes(searcher)
    }
  }
}
