import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matcher } from '@validations/matcher.validation';
import { PASSWORD } from '@constants/regexp/validations.regexp';
import { MessagesValidtions } from '@sign/types/sign.type';
import { emailMessage, patternMessage, requiredMessage } from '@sign/constants/message-validations.constant';

const MESSAGES = {
  email: {
    ...requiredMessage,
    ...emailMessage,
    maxlength: 'No puede ser mas de 8'
  },
  lastName: requiredMessage,
  name: requiredMessage,
  password: {
    ...requiredMessage,
    ...patternMessage('este campo requiere al menos un letra mayuscula y un numero')
  },
  password_confirm: {
    ...requiredMessage,
    isNotEqual: 'la confirmación no coincide'
  }
}

@Component({
  selector: 'wlx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../../sign.component.scss']
})
export class SignUpComponent implements OnInit {

  public messages: MessagesValidtions = MESSAGES
  public formSignUp!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildSignUpForm()
  }

  public getControl(nameControl: string): AbstractControl | null {
    return this.formSignUp.get(nameControl)
  }

  public onSubmit(): void {
    if (this.formSignUp.invalid) {
      this.formSignUp.markAllAsTouched()
    } else {
      const value = this.formSignUp.value
      console.log(value)
    }
  }

  private buildSignUpForm(): void {
    this.formSignUp = this.fb.group({
      email: this.fb.control('', Validators.compose([Validators.required, Validators.email, Validators.maxLength(8)])),
      lastName: this.fb.control('', Validators.required),
      name: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.compose([Validators.required, Validators.pattern(PASSWORD)])),
      password_confirm: this.fb.control('', Validators.required),
      locale: 'en',
    }, {
      validator: matcher('password', 'password_confirm')
    })
  }
}
