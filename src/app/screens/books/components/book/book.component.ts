import { Component, Input } from '@angular/core';
import { Book } from '@books/services/book/book.types';
import { ShoppingService } from '@books/services/shopping/shopping.service';

@Component({
  selector: 'wlx-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
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

  public addBook() {
    this.shoppingCartService.addBook(this.book)
  }
}
