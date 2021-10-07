import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';
import { HeaderModule } from '@components/header/header.module';
import { FilterPipeModule } from '@pipes/filter/filter.pipe.module';

/* Routing module */
import { BooksRoutingModule } from './books-routing.module';

/* Components */
import { BookComponent } from '@books/components/book/book.component';

@NgModule({
  declarations: [
    ...BooksRoutingModule.componentsUsingRouting,
    BookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    /* Routing module */
    BooksRoutingModule,
    /* External modules */
    FilterPipeModule,
    CompanyNameModule,
    HeaderModule,
  ]
})
export class BooksModule { }
