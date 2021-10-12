import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { BookDetailComponent } from '@books/screens/book-detail/book-detail.component';
import { ROUTE_ROOT } from '@constants/routes';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailRoutingModule {
  static components = [BookDetailComponent]
}
