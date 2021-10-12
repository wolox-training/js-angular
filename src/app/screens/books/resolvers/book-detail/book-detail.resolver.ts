import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from '@books/services/book/book.types';

import { BookService } from '@books/services/book/book.service';

@Injectable()
export class BookDetailResolver implements Resolve<Book> {

  constructor(
    private readonly bookService: BookService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    return this.bookService.getBookById(route.params['id'])
  }
}
