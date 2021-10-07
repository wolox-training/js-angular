import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CompanyNameModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }
