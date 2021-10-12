import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailRoutingModule } from './book-detail-routing.module';

/* external modules */
import { I18nModule } from '@i18n/i18n.module';

@NgModule({
  declarations: [
    ...BookDetailRoutingModule.components
  ],
  imports: [
    CommonModule,
    BookDetailRoutingModule,
    /* external modules */
    I18nModule,
    I18nModule.forChild()
  ]
})
export class BookDetailModule { }
