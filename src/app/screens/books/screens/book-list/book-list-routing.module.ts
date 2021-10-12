import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Constants */
import { ROUTE_ROOT } from '@constants/routes';

/* Components */
import { BookListComponent } from '@books/screens/book-list/book-list.component';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    component: BookListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookListRoutingModule {
  static components = [BookListComponent]
}
