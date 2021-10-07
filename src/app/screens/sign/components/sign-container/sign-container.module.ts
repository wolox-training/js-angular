import { NgModule } from '@angular/core';
import { SignContainerComponent } from '@sign/components/sign-container/sign-container.component';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';

@NgModule({
  declarations: [
    SignContainerComponent
  ],
  imports: [
    CompanyNameModule
  ],
  exports: [
    SignContainerComponent
  ]
})
export class SignControlModule { }
