import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBackComponent } from './auth-back.component';

describe('AuthBackComponent', () => {
  let component: AuthBackComponent;
  let fixture: ComponentFixture<AuthBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
