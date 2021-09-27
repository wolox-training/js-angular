import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignControlsComponent } from './sign-controls.component';

describe('SignControlsComponent', () => {
  let component: SignControlsComponent;
  let fixture: ComponentFixture<SignControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
