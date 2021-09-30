import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, RenderResult } from '@testing-library/angular';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import userEvent from '@testing-library/user-event';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { SignUpComponent, MESSAGES } from '@sign/components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageErrorModule } from '@components/message-error/message-error.module';
import { UserService } from '@services/user/user.service';

describe('Sign up component', () => {
  let result: RenderResult<SignUpComponent, SignUpComponent>;
  let fixture: ComponentFixture<SignUpComponent>;
  let componentForm: SignUpComponent;
  const createUserMock = jest.fn(() => of())
  beforeEach(async () => {
    result = await render(SignUpComponent, {
      imports: [ReactiveFormsModule, FormsModule, MessageErrorModule, HttpClientModule],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: createUserMock,
          }
        }
      ]
    });
    fixture = result.fixture;
    fixture.autoDetectChanges(true);
    componentForm = fixture.componentInstance;
    expect(componentForm).toBeTruthy();
  })

  test('create instance', fakeAsync(() => {
    expect(componentForm).toBeTruthy()
  }));

  test('Should validate form', fakeAsync(async () => {
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    const messages = await screen.findAllByText('requerido', { exact: false })
    for (let message of messages) {
      expect(message).toBeTruthy()
    }
    expect(createUserMock).not.toHaveBeenCalled()
  }));

  test('Should call api service create user', async () => {
    const inputControlName = await screen.findByTitle(/^nombre$/i);
    userEvent.type(inputControlName, 'testing');
    const inputControlLastName = await screen.findByTitle(/^apellido$/i);
    userEvent.type(inputControlLastName, 'lastname');
    const inputControlEmail = await screen.findByTitle(/^email$/i);
    userEvent.type(inputControlEmail, 'test@test.com');
    const inputControlPassword = await screen.findByTitle(/^password$/i);
    userEvent.type(inputControlPassword, 'Asd1');

    const inputControlConfirmPassword = await screen.findByTitle(/^password_confirm$/i);
    userEvent.type(inputControlConfirmPassword, 'Asd1');

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(createUserMock).toHaveBeenCalled()
  })

  test('Should errors when value changed', async () => {

    /* Validation input name */
    const inputControlName = await screen.findByTitle(/^nombre$/i);
    userEvent.type(inputControlName, 'test');
    expect(screen.queryByText(MESSAGES.first_name.minlength, { exact: false })).toBeTruthy();
    userEvent.type(inputControlName, 'ing');
    expect(screen.queryByText(MESSAGES.first_name.minlength, { exact: false })).toBeNull();

    /* Validation input last name*/
    const inputControlLastName = await screen.findByTitle(/^apellido$/i);
    userEvent.type(inputControlLastName, 'last');
    expect(screen.queryByText(MESSAGES.last_name.minlength, { exact: false })).toBeTruthy();
    userEvent.type(inputControlLastName, 'lastname');
    expect(screen.queryByText(MESSAGES.last_name.minlength, { exact: false })).toBeNull();

    /* Validation input email */
    const inputControlEmail = await screen.findByTitle(/^email$/i);
    userEvent.type(inputControlEmail, 'test');
    expect(screen.queryByText(MESSAGES.email.email, { exact: false })).toBeTruthy();
    userEvent.type(inputControlEmail, 'test@test.com');
    expect(screen.queryByText(MESSAGES.email.email, { exact: false })).toBeNull();

    /* Validation input password */
    const inputControlPassword = await screen.findByTitle(/^password$/i);
    userEvent.type(inputControlPassword, 'asd');
    expect(screen.queryByText(MESSAGES.password.pattern, { exact: false })).toBeTruthy();
    userEvent.type(inputControlPassword, 'Asd1');
    expect(screen.queryByText(MESSAGES.password.pattern, { exact: false })).toBeNull();

    /* Validation input confirm password */
    const inputControlConfirmPassword = await screen.findByTitle(/^password_confirm$/i);
    userEvent.type(inputControlConfirmPassword, 'asd');
    expect(screen.queryByText(MESSAGES.password_confirm.isNotEqual, { exact: false })).toBeTruthy();
    userEvent.type(inputControlConfirmPassword, 'Asd1');
    expect(screen.queryByText(MESSAGES.password_confirm.isNotEqual, { exact: false })).toBeNull();
  })

})
