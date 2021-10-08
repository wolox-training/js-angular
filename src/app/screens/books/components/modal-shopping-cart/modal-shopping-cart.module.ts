import { NgModule } from '@angular/core';
import { ModalShoppingComponent } from './modal-shopping-cart.component';

/* External modules */
import { ModalModule } from '@components/modal/modal.module';
import { CommonModule } from '@angular/common';

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
