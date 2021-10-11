import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External modules */
import { ModalModule } from '@components/modal/modal.module';

/* Components */
import { ModalShoppingComponent } from '@books/components/modal-shopping-cart/modal-shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
  ],
  declarations: [
    ModalShoppingComponent
  ],
  exports: [
    ModalShoppingComponent
  ]
})
export class ModalShoppingCartModule { }
