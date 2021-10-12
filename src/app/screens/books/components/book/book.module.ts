import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookComponent } from '@books/components/book/book.component';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [BookComponent]
})
export class BookModule { }
