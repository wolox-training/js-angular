import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { SignComponent } from '@sign/sign.component';

/* Constants */
import { ROUTE_LOGIN, ROUTE_ROOT, ROUTE_SIGNUP } from '@constants/routes';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    component: SignComponent,
    children: [
      {
        path: ROUTE_ROOT,
        redirectTo: ROUTE_LOGIN
      },
      {
        path: ROUTE_SIGNUP,
        loadChildren: () => import('@sign/screens/sign-up/sign-up.module').then(m => m.SignUpModule)
      },
      {
        path: ROUTE_LOGIN,
        loadChildren: () => import('@sign/screens/sign-in/sign-in.module').then(m => m.SignInModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }
