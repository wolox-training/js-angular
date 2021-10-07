import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_ROOT } from '@constants/routes';
import { SignInComponent } from '@sign/screens/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    component: SignInComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule {
  static components = [
    SignInComponent
  ]
}
