import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

/* Types */
import { Book } from '@books/services/book/book.types';

/* Services */
import { BookService } from '@books/services/book/book.service';

@Injectable()
export class BooksResolver implements Resolve<Book[]> {

  constructor(
    private readonly bookService: BookService
  ) { }

  resolve(): Observable<Book[]> {
    return this.bookService.getAllBooks()
  }
}
