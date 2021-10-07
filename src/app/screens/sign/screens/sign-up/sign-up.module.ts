import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* Module routing */
import { SignUpRoutingModule } from '@sign/screens/sign-up/sign-up-routing.module';

/* Interceptors */
import { LoginInterceptor } from '@sign/interceptors/login/login.interceptor';
import { CommonModule } from '@angular/common';

/* External Modules */
import { UserServiceModule } from '@services/user/user.service.module';
import { StorageServiceModule } from '@services/storage/storage.module';
import { MessageErrorModule } from '@components/message-error/message-error.module';
import { SignControlModule } from '@sign/components/sign-controls/sign-controls.module';
import { DirectivesModule } from '@directives/directives.module';

@NgModule({
  declarations: [
    ...SignUpRoutingModule.components
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    /* Module routing */
    SignUpRoutingModule,
    /* External Modules Services */
    DirectivesModule,
    UserServiceModule,
    StorageServiceModule,
    MessageErrorModule,
    SignControlModule,
  ],
})
export class SignUpModule { }
