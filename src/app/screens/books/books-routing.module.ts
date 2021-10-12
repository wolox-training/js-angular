import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { BooksComponent } from './books.component';

/* Constants */
import { ROUTE_ROOT } from '@constants/routes';

/* Resolvers */
import { BooksResolver } from '@books/resolvers/books/books.resolver';
import { BookDetailResolver } from '@books/resolvers/book-detail/book-detail.resolver';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    component: BooksComponent,
    children: [
      {
        path: ROUTE_ROOT,
        loadChildren: () => import('@books/screens/book-list/book-list.module').then(m => m.BookListModule),
        resolve: {
          books: BooksResolver
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: ':id',
        loadChildren: () => import('@books/screens/book-detail/book-detail.module').then(m => m.BookDetailModule),
        resolve: {
          bookDetail: BookDetailResolver
        },
        runGuardsAndResolvers: 'always',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
  static componentsUsingRouting: any[] = [BooksComponent]
}
