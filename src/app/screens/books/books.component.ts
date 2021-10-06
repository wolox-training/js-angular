import { Component } from '@angular/core';

@Component({
  selector: 'wlx-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  public books = new Array();
  public search: string = '';
}
