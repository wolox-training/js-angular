import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@books/components/header/header.component';
import { ShoppingCartIconModule } from '@icons/shopping-cart/shopping-cart-icon.module';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CompanyNameModule,
    ShoppingCartIconModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
