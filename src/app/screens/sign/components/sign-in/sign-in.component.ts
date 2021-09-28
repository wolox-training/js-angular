import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailMessage, requiredMessage } from '@sign/constants/message-validations.constant';
import { MessagesValidtions } from '@sign/types/sign.type';

@Component({
  selector: 'wlx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../../sign.component.scss']
})
export class SignInComponent implements OnInit {

  public formSignIn!: FormGroup;
  public readonly messages: MessagesValidtions = {
    email: {
      ...requiredMessage,
      ...emailMessage
    },
    password: requiredMessage,
  }

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildFormSignIn()
  }

  public getControl(nameControl: string): AbstractControl | null {
    return this.formSignIn.get(nameControl)
  }

  public onSubmit(): void {
    if (this.formSignIn.invalid) {
      this.formSignIn.markAllAsTouched()
    } else {
      const value = this.formSignIn.value
      console.log(value)
    }
  }

  private buildFormSignIn(): void {
    this.formSignIn = this.fb.group({
      email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.fb.control('', Validators.required)
    })
  }
}
