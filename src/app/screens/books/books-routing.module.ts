import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { BooksComponent } from './books.component';

/* Constants */
import { ROUTE_ROOT } from '@constants/routes';

/* Resolvers */
import { BooksResolver } from './resolvers/books/books.resolver';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    component: BooksComponent,
    resolve: {
      books: BooksResolver
    },
    runGuardsAndResolvers: 'always',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
  static componentsUsingRouting: any[] = [BooksComponent]
}
