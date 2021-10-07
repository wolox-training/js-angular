import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External modules */
import { SignInModule } from '@sign/screens/sign-in/sign-in.module';
import { SignUpModule } from '@sign/screens/sign-up/sign-up.module';
import { SignControlModule } from '@sign/components/sign-container/sign-container.module';

/* Routing */
import { SignRoutingModule } from '@sign/sign-routing.module';

/* Components */
import { SignComponent } from '@sign/sign.component';

@NgModule({
  declarations: [
    SignComponent,
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    /* External modules */
    SignInModule,
    SignUpModule,
    SignControlModule,
  ]
})
export class SignModule { }
