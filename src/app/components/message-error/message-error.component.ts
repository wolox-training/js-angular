import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Message } from '@sign/types/sign.type';
import { isInvalidField } from '@validations/isInvalidField';

@Component({
  selector: 'wlx-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent {

  @Input() control!: AbstractControl | null
  @Input() messages: Message = {}
  @Input() showAllMessage: boolean = false
  @Input() errorsForm!: ValidationErrors | null

  public get errors() {
    return { ...this.control?.errors, ...this.errorsForm }
  }

  public get keysMessagesError(): string[] {
    if (this.control && isInvalidField(this.control) || this.errorsForm) {
      const keyErrorsForm = Object.keys(this.errors)
      if (this.showAllMessage) {
        return keyErrorsForm
      }
      return keyErrorsForm.slice(0, 1)
    }
    return []
  }
}
