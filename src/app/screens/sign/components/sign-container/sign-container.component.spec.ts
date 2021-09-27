import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignContainerComponent } from './sign-container.component';

describe('SignContianerComponent', () => {
  let component: SignContainerComponent;
  let fixture: ComponentFixture<SignContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
