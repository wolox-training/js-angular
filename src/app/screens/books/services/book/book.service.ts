import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/* Endpoints */
import { API_BOOKS } from '@books/services/book/books.endpoints';

/* Types */
import { Book, ResponseBooks } from '@books/services/book/book.types';
import { StorageService } from '@services/storage/storage.service';

/* Contants */
import { KEYS_STORAGE } from '@constants/storageKeys';

@Injectable()
export class BookService {

  constructor(
    private readonly http: HttpClient,
    private readonly storeService: StorageService
  ) { }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<ResponseBooks>(API_BOOKS).pipe(
      map((response: ResponseBooks) => response.page),
      catchError(err => {
        this.storeService.localRemoveItem(KEYS_STORAGE.access_token)
        this.storeService.localRemoveItem(KEYS_STORAGE.client)
        this.storeService.localRemoveItem(KEYS_STORAGE.user)
        return throwError(err)
      })
    );
  }
}
