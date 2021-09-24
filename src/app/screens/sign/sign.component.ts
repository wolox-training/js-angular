import { Component } from '@angular/core';
import { SIGN_IN, SIGN_UP } from './constants/types.constant';

/* types */
import { sign } from './types/sign.type';

@Component({
  selector: 'wx-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

  public readonly SIGN_IN = SIGN_IN;
  public readonly SIGN_UP = SIGN_UP;
  private typeForm: sign = SIGN_IN;

  public get typeSign(): sign {
    return this.typeForm
  }

  public changeTypeForm() {
    this.typeForm = this.typeForm === SIGN_IN ? SIGN_UP : SIGN_IN;
  }

}
