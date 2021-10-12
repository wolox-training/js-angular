import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailRoutingModule } from './book-detail-routing.module';


@NgModule({
  declarations: [
    ...BookDetailRoutingModule.components
  ],
  imports: [
    CommonModule,
    BookDetailRoutingModule
  ]
})
export class BookDetailModule { }
