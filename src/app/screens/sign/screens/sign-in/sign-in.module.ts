import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* External Modules */
import { UserServiceModule } from '@services/user/user.service.module';
import { MessageErrorModule } from '@components/message-error/message-error.module';
import { SignControlModule } from '@sign/components/sign-controls/sign-controls.module';

/* Routing module */
import { SignInRoutingModule } from '@sign/screens/sign-in/sign-in-routing.module';

/* Interceptors */
import { LoginInterceptor } from '@sign/interceptors/login/login.interceptor';

@NgModule({
  declarations: [
    ...SignInRoutingModule.components
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
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
