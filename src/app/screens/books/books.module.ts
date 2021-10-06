import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';
import { HeaderModule } from '@components/header/header.module';

/* Routing module */
import { BooksRoutingModule } from '@books/books-routing.module';

@NgModule({
  declarations: [
    ...BooksRoutingModule.componentsUsingRouting,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    /* Routing module */
    BooksRoutingModule,
    /* External modules */
    CompanyNameModule,
    HeaderModule,
  ]
})
export class BooksModule { }
