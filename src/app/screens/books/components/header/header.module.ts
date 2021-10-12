import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@books/components/header/header.component';
import { ShoppingCartIconModule } from '@icons/shopping-cart/shopping-cart-icon.module';

/* External modules */
import { CompanyNameModule } from '@components/company-name/company-name.module';
import { BadgeComponentModule } from '@components/badge/badge.module';
import { ModalShoppingCartModule } from '@books/components/modal-shopping-cart/modal-shopping-cart.module';

/* Internationalization */
import { I18nModule } from '@i18n/i18n.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CompanyNameModule,
    ShoppingCartIconModule,
    BadgeComponentModule,
    ModalShoppingCartModule,
    I18nModule,
    I18nModule.forChild()
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
