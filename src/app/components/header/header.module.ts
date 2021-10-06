import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { CompanyNameModule } from '@components/company-name/company-name.module';

/* External modules */

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CompanyNameModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }
