import { Component, OnDestroy, OnInit } from '@angular/core';

/* Types */
import { Book } from '@books/services/book/book.types';

/* External services */
import { ShoppingService } from '@books/services/shopping/shopping.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'wlx-modal-shopping-cart',
  templateUrl: './modal-shopping-cart.component.html',
  styleUrls: ['./modal-shopping-cart.component.scss']
})
export class ModalShoppingComponent implements OnInit, OnDestroy {
  public books: Book[] = [];
  private readonly $unsubscribe = new Subject()
  constructor(
    private readonly shoppingService: ShoppingService
  ) { }

  ngOnInit() {
    this.listenBooks()
  }

  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  private listenBooks() {
    this.shoppingService.$listBooks.pipe(
      takeUntil(this.$unsubscribe)
    ).subscribe(books => {
      this.books = books
    })
  }

  public deleteBook(book: Book): void {
    this.shoppingService.removeBook(book?.id)
  }
}
