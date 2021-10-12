import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';
import { HeaderModule } from '@books/components/header/header.module';
import { FilterPipeModule } from '@pipes/filter/filter.pipe.module';
import { ModalShoppingCartModule } from '@books/components/modal-shopping-cart/modal-shopping-cart.module';

/* Routing module */
import { BooksRoutingModule } from '@books/books-routing.module';

/* Components */
import { BookComponent } from '@books/components/book/book.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* Interceptors */
import { AuthInterceptor } from '@books/interceptors/auth/auth.interceptor';

/* Resolvers */
import { BooksResolver } from '@books/resolvers/books/books.resolver';
import { BookDetailResolver } from '@books/resolvers/book-detail/book-detail.resolver';

/* Services */
import { BookService } from '@books/services/book/book.service';
import { ShoppingService } from '@books/services/shopping/shopping.service';

@NgModule({
  declarations: [
    ...BooksRoutingModule.componentsUsingRouting,
    BookComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    /* Resolvers */
    BooksResolver,
    BookDetailResolver,
    /* Services */
    BookService,
    ShoppingService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule,
    /* Routing module */
    BooksRoutingModule,
    /* External modules */
    FilterPipeModule,
    CompanyNameModule,
    HeaderModule,
    ModalShoppingCartModule,
  ]
})
export class BooksModule { }
