import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* External modules */
import { DirectivesModule } from '@directives/directives.module';
import { MessageErrorModule } from '@components/message-error/message-error.module';
import { CompanyNameModule } from '@components/company-name/company-name.module';

/* External Modules Services */
import { UserServiceModule } from '@services/user/user.service.module';
import { StorageModule } from '@services/storage/storage.module';

/* Interceptors */
import { LoginInterceptor } from './interceptors/login/login.interceptor';

/* Routing */
import { SignRoutingModule } from '@sign/sign-routing.module';

/* Components */
import { SignComponent } from '@sign/sign.component';
import { SignUpComponent } from '@sign/components/sign-up/sign-up.component';
import { SignInComponent } from '@sign/components/sign-in/sign-in.component';
import { SignControlsComponent } from '@sign/components/sign-controls/sign-controls.component';
import { SignContainerComponent } from '@sign/components/sign-container/sign-container.component';

@NgModule({
  declarations: [
    SignComponent,
    SignUpComponent,
    SignInComponent,
    SignControlsComponent,
    SignContainerComponent,
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
    SignRoutingModule,
    /* External modules */
    DirectivesModule,
    MessageErrorModule,
    CompanyNameModule,
    /* External Modules Services */
    UserServiceModule,
    StorageModule,
  ]
})
export class SignModule { }
