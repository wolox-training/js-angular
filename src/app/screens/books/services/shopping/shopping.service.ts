import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/* External Types */
import { Book } from '@books/services/book/book.types';
import { map } from 'rxjs/operators';

export type MapBooks = Map<number, Book>

@Injectable()
export class ShoppingService {

  private readonly $bookStore: BehaviorSubject<MapBooks> = new BehaviorSubject<MapBooks>(new Map())

  get $listBooks(): Observable<Book[]> {
    return this.$bookStore.asObservable().pipe(
      map((books: MapBooks) => Array.from(books, ([_, value]) => value))
    )
  }

  private getListBooks(): MapBooks {
    return this.$bookStore.getValue()
  }

  public addBook(book: Book): void {
    this.$bookStore.next(this.getListBooks().set(book.id, book));
  }

  public removeBook(idBook: number): boolean {
    const books = this.getListBooks()
    const hasBeenDeleted = books.delete(idBook);
    this.$bookStore.next(books);
    return hasBeenDeleted
  }

  public getTotalAdded(): Observable<number> {
    return this.$bookStore.pipe(
      map((books: MapBooks) => books.size)
    )
  }

  public isBookSelected(idBook: number): boolean {
    const books = this.getListBooks();
    return books.has(idBook);
  }

}
