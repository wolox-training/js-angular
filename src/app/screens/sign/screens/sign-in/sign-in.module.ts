import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* External Modules */
import { UserServiceModule } from '@services/user/user.service.module';
import { MessageErrorModule } from '@components/message-error/message-error.module';
import { SignControlModule } from '@sign/components/sign-controls/sign-controls.module';

/* Routing module */
import { SignInRoutingModule } from '@sign/screens/sign-in/sign-in-routing.module';

@NgModule({
  declarations: [
    ...SignInRoutingModule.components
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    /* Routing module */
    SignInRoutingModule,
    /* External Modules Services */
    UserServiceModule,
    MessageErrorModule,
    SignControlModule,
  ]
})
export class SignInModule { }
