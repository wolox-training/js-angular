import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* Routing module */
import { BooksRoutingModule } from '@books/books-routing.module';

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
    HttpClientModule,
    /* Routing module */
    BooksRoutingModule,
  ]
})
export class BooksModule { }
