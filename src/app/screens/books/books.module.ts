import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';
import { FilterPipeModule } from '@pipes/filter/filter.pipe.module';

/* Routing module */
import { BooksRoutingModule } from './books-routing.module';
/* Components */
import { HeaderComponent } from './components/header/header.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    HeaderComponent,
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
  ]
})
export class BooksModule { }