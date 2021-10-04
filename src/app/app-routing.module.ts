import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Constanst */
import { ROUTE_ROOT, ROUTE_BOOKS } from '@constants/routes';
import { AuthGuard } from '@guards/auth/auth.guard';

/* Guards */
import { UnauthGuard } from '@guards/unauth/unauth.guard';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    loadChildren: () => import('@sign/sign.module').then(m => m.SignModule),
    canActivate: [
      UnauthGuard
    ]
  },
  {
    path: ROUTE_BOOKS,
    loadChildren: () => import('@books/books.module').then(m => m.BooksModule),
    canLoad: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
