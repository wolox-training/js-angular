import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* External Modules */
import { UserServiceModule } from '@services/user/user.service.module';
import { MessageErrorModule } from '@components/message-error/message-error.module';

/* Components */
import { SignInComponent } from '@sign/screens/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    /* External Modules Services */
    UserServiceModule,
    MessageErrorModule,
  ]
})
export class SignInModule { }
