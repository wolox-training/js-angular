import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@books/services/book/book.types';

@Component({
  selector: 'wlx-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  private book!: Book
  constructor(
    private readonly activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.data.subscribe(({ bookDetail }) => this.book = bookDetail)
  }

  public get author() {
    return this.book?.author
  }

  public get editorial(): string {
    return this.book?.editor
  }

  public get genre(): string {
    return this.book?.genre
  }

  public get urlImg(): string {
    return this.book?.image_url
  }

  public get release(): string {
    return this.book?.year
  }

  public get title(): string {
    return this.book?.title
  }

}
