import { NgModule } from '@angular/core';

/* Components */
import { ModalComponent } from '@components/modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
