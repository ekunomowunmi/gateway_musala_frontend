import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBtnComponent } from './main-btn.component';

describe('MainBtnComponent', () => {
  let component: MainBtnComponent;
  let fixture: ComponentFixture<MainBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
