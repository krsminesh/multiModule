import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLeaveBalanceComponent } from './check-leave-balance.component';

describe('CheckLeaveBalanceComponent', () => {
  let component: CheckLeaveBalanceComponent;
  let fixture: ComponentFixture<CheckLeaveBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckLeaveBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckLeaveBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
