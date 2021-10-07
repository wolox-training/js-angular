import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* Components */
import { SignUpComponent } from '@sign/screens/sign-up/sign-up.component';

/* Interceptors */
import { LoginInterceptor } from '@sign/interceptors/login/login.interceptor';
import { CommonModule } from '@angular/common';

/* External Modules */
import { UserServiceModule } from '@services/user/user.service.module';
import { StorageServiceModule } from '@services/storage/storage.module';
import { MessageErrorModule } from '@components/message-error/message-error.module';

@NgModule({
  declarations: [SignUpComponent],
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
    /* External Modules Services */
    UserServiceModule,
    StorageServiceModule,
    MessageErrorModule,
  ],
})
export class SignUpModule { }
