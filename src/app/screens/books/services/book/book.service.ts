import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* Endpoints */
import { API_BOOKS } from '@books/services/book/books.endpoints';

/* Types */
import { Book, ResponseBooks } from '@books/services/book/book.types';

@Injectable()
export class BookService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<ResponseBooks>(API_BOOKS).pipe(
      map((response: ResponseBooks) => {
        return response.page
      })
    );
  }
}
