import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External modules */
import { DirectivesModule } from '@directives/directives.module';
import { MessageErrorModule } from '@components/message-error/message-error.module';
import { CompanyNameModule } from '@components/company-name/company-name.module';

/* External modules */
import { SignInModule } from '@sign/screens/sign-in/sign-in.module';
import { SignUpModule } from '@sign/screens/sign-up/sign-up.module';

/* Routing */
import { SignRoutingModule } from '@sign/sign-routing.module';

/* Components */
import { SignComponent } from '@sign/sign.component';
import { SignControlsComponent } from '@sign/components/sign-controls/sign-controls.component';
import { SignContainerComponent } from '@sign/components/sign-container/sign-container.component';

@NgModule({
  declarations: [
    SignComponent,
    SignControlsComponent,
    SignContainerComponent,
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    /* External modules */
    DirectivesModule,
    MessageErrorModule,
    CompanyNameModule,
    SignInModule,
    SignUpModule
  ]
})
export class SignModule { }
