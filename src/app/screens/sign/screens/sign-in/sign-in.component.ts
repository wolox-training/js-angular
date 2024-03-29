import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, timer } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';

import { UserService } from '@services/user/user.service';
import { emailMessage, requiredMessage } from '@sign/constants/message-validations.constant';
import { MessagesValidtions, sign } from '@sign/types/sign.type';
import { Router } from '@angular/router';
import { buildRedirectRoute, ROUTE_BOOKS } from '@constants/routes';
import { SIGN_IN } from '@sign/constants/types.constant';

@Component({
  selector: 'wlx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../../sign.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {

  public showErrorMessage: boolean = false;
  public isLogin: boolean = false;
  public formSignIn!: FormGroup;
  public readonly signIn: sign = SIGN_IN;
  public readonly messages: MessagesValidtions = {
    email: {
      ...requiredMessage,
      ...emailMessage
    },
    password: requiredMessage,
  }
  private destroy$: Subject<boolean> = new Subject<boolean>()
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    public readonly userService: UserService,
  ) { }

  ngOnInit(): void {
    this.buildFormSignIn()
  }

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

  public getControl(nameControl: string): AbstractControl | null {
    return this.formSignIn.get(nameControl)
  }

  public onSubmit(): void {
    if (!this.isLogin) {
      if (this.formSignIn.invalid) {
        this.formSignIn.markAllAsTouched()
      } else {
        const value = this.formSignIn.value;
        this.isLogin = true;
        this.userService.login(value).pipe(
          takeUntil(this.destroy$),
          finalize(() => {
            this.isLogin = false
          })
        ).subscribe(() => {
          // redirect routes
          this.router.navigateByUrl(buildRedirectRoute(ROUTE_BOOKS))
        }, () => {
          this.showErrorMessage = true;
          const timeToHidden = 3000
          timer(timeToHidden).pipe(
            takeUntil(this.destroy$)
          ).subscribe(() => {
            this.showErrorMessage = true;
          })
        })
      }
    }
  }

  private buildFormSignIn(): void {
    this.formSignIn = this.fb.group({
      email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.fb.control('', Validators.required)
    })
  }
}
