import { Component, Input } from '@angular/core';

/* Types */
import { Book } from '@books/services/book/book.types';

/* Services */
import { ShoppingService } from '@books/services/shopping/shopping.service';

@Component({
  selector: 'wlx-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {

  @Input() book!: Book;

  constructor(
    private readonly shoppingCartService: ShoppingService
  ) { }

  get urlImg(): string {
    return this.book?.image_url
  }

  get title(): string {
    return this.book?.title
  }

  get author(): string {
    return this.book?.author
  }

  get isAddedBook(): boolean {
    return this.shoppingCartService.isBookSelected(this.book?.id)
  }

  public addOrRemoveBook() {
    if (this.isAddedBook) {
      this.shoppingCartService.removeBook(this.book?.id)
    } else {
      this.shoppingCartService.addBook(this.book)
    }
  }
}
