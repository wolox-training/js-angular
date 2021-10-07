import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_ROOT } from '@constants/routes';
import { SignUpComponent } from '@sign/screens/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: ROUTE_ROOT,
    component: SignUpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule {
  static components = [
    SignUpComponent
  ]
}
