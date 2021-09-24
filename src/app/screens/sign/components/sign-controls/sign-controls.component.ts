import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SIGN_IN, SIGN_UP } from '@sign/constants/types.constant';

/* types */
import { sign } from '@sign/types/sign.type';

@Component({
  selector: 'wlx-sign-controls',
  templateUrl: './sign-controls.component.html',
  styleUrls: ['./sign-controls.component.scss']
})
export class SignControlsComponent {

  @Input() type: sign = SIGN_UP
  @Output() toggleForm: EventEmitter<void> = new EventEmitter<void>()

  get sign(): string {
    return this.isSignin ? 'login' : 'sign up'
  }

  get back(): string {
    return !this.isSignin ? 'login' : 'sign up'
  }

  private get isSignin() {
    return this.type === SIGN_IN
  }

  public changeForm() {
    this.toggleForm.emit()
  }

}
