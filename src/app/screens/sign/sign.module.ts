import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { SignComponent } from './sign.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SignModule { }
