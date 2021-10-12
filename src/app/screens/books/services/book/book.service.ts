import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/* Endpoints */
import { API_BOOKS, API_DETAIL_BOOK } from '@books/services/book/books.endpoints';

/* Types */
import { Book, ResponseBooks } from '@books/services/book/book.types';

/* Services */
import { StorageService } from '@services/storage/storage.service';

/* Contants */
import { KEYS_STORAGE } from '@constants/storageKeys';
import { ROUTE_ROOT } from '@constants/routes';

@Injectable()
export class BookService {

  constructor(
    private readonly http: HttpClient,
    private readonly storeService: StorageService,
    private readonly router: Router
  ) { }

  private erroAuthentication() {
    this.storeService.localRemoveItem(KEYS_STORAGE.access_token)
    this.storeService.localRemoveItem(KEYS_STORAGE.client)
    this.storeService.localRemoveItem(KEYS_STORAGE.user)
    this.router.navigateByUrl(ROUTE_ROOT)
  }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<ResponseBooks>(API_BOOKS).pipe(
      map((response: ResponseBooks) => response.page),
      catchError(err => {
        this.erroAuthentication()
        return throwError(err)
      })
    );
  }

  public getBookById(idBook: number): Observable<Book> {
    return this.http.get<Book>(API_DETAIL_BOOK(idBook)).pipe(
      catchError(err => {
        this.erroAuthentication()
        return throwError(err)
      })
    )
  }
}
