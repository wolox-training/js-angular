import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';
import { HeaderModule } from '@books/components/header/header.module';
import { FilterPipeModule } from '@pipes/filter/filter.pipe.module';
import { ModalShoppingCartModule } from '@books/components/modal-shopping-cart/modal-shopping-cart.module';
import { BookModule } from '@books/components/book/book.module';

import { BookListRoutingModule } from '@books/screens/book-list/book-list-routing.module';

@NgModule({
  declarations: [
    ...BookListRoutingModule.components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    BookListRoutingModule,
    /* External modules */
    FilterPipeModule,
    CompanyNameModule,
    HeaderModule,
    ModalShoppingCartModule,
    BookModule,
  ]
})
export class BookListModule { }
