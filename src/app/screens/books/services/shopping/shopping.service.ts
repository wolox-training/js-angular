import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/* External Types */
import { Book } from '@books/services/book/book.types';
import { map } from 'rxjs/operators';

@Injectable()
export class ShoppingService {

  private readonly $bookStore: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])

  get $listBooks(): BehaviorSubject<Book[]> {
    return this.$bookStore
  }

  private getListBooks(): Book[] {
    return this.$bookStore.getValue()
  }

  public addBook(book: Book): void {
    this.$bookStore.next([...this.getListBooks(), book]);
  }

  public removeBook(idBook: number): boolean {
    const books = this.getListBooks();
    const indexBook = books.findIndex(book => book.id === idBook)
    if (indexBook === -1) {
      return false
    }
    books.splice(indexBook, 1);
    this.$bookStore.next(books);
    return true
  }

  public getTotalAdded(): Observable<number> {
    return this.$bookStore.pipe(
      map((books: Book[]) => books.length)
    )
  }

}
