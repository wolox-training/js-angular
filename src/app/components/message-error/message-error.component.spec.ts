import { render } from '@testing-library/angular';
import { MessageErrorComponent } from '@components/message-error/message-error.component';
import { fakeAsync } from '@angular/core/testing';

describe('Should render message', () => {
  test('render', fakeAsync(async () => {
    const { fixture } = await render(MessageErrorComponent)
    expect(fixture.componentInstance).toBeTruthy()
  }))
})
