import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Validations */
import { matcher } from '@validations/matcher.validation';
import { PASSWORD } from '@constants/regexp/validations.regexp';

/* Constants */
import { emailMessage, patternMessage, requiredMessage } from '@sign/constants/message-validations.constant';

/* Types */
import { MessagesValidtions } from '@sign/types/sign.type';

/* Services */
import { UserService } from '@services/user/user.service';

const MESSAGES = {
  email: {
    ...requiredMessage,
    ...emailMessage,
  },
  last_name: requiredMessage,
  first_name: requiredMessage,
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
    /* Services */
    private readonly userService: UserService
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
      const newUser = this.formSignUp.value
      this.userService.create(newUser).subscribe(console.log)
    }
  }

  private buildSignUpForm(): void {
    this.formSignUp = this.fb.group({
      email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      first_name: this.fb.control('', Validators.required),
      last_name: this.fb.control('', Validators.required),
      locale: 'en',
      password: this.fb.control('', Validators.compose([Validators.required, Validators.pattern(PASSWORD)])),
      password_confirm: this.fb.control('', Validators.required),
    }, {
      validator: matcher('password', 'password_confirm')
    })
  }
}
