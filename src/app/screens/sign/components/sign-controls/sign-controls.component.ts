import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

/* Constants */
import { SIGN_IN, SIGN_UP } from '@sign/constants/types.constant';
import { ROUTE_SIGNUP, ROUTE_LOGIN, buildRedirectRoute } from '@constants/routes';

/* types */
import { sign } from '@sign/types/sign.type';

@Component({
  selector: 'wlx-sign-controls',
  templateUrl: './sign-controls.component.html',
  styleUrls: ['./sign-controls.component.scss']
})
export class SignControlsComponent {

  @Input() type: sign = SIGN_UP;

  constructor(
    private readonly router: Router
  ) {

  }

  get sign(): string {
    return this.isSignin ? 'login' : 'sign up'
  }

  get back(): string {
    return !this.isSignin ? 'login' : 'sign up'
  }

  private get isSignin() {
    return this.type === SIGN_IN
  }

  public goPreviousRoute() {
    this.router.navigateByUrl(this.buildUrlBack())
  }

  private buildUrlBack(): string {
    return buildRedirectRoute(`${this.isSignin ? ROUTE_SIGNUP : ROUTE_LOGIN}`)
  }

}
