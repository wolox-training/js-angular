import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External modules */
import { ComponentsModule } from '@components/components.module';

/* Routing */
import { SignRoutingModule } from '@sign/sign-routing.module'

/* Components */
import { SignComponent } from '@sign/sign.component';
import { SignUpComponent } from '@sign/components/sign-up/sign-up.component';
import { SignInComponent } from '@sign/components/sign-in/sign-in.component';
import { SignControlsComponent } from '@sign/components/sign-controls/sign-controls.component';
import { SignContainerComponent } from '@sign/components/sign-container/sign-container.component'

@NgModule({
  declarations: [
    SignComponent,
    SignUpComponent,
    SignInComponent,
    SignControlsComponent,
    SignContainerComponent,
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    ComponentsModule,
  ]
})
export class SignModule { }
