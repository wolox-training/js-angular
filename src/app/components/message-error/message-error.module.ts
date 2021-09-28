import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageErrorComponent } from './message-error.component';

@NgModule({
  declarations: [MessageErrorComponent],
  exports: [MessageErrorComponent],
  imports: [CommonModule]
})
export class MessageErrorModule { }
