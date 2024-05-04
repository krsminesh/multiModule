import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLandingPageComponent } from './member-landing-page.component';

describe('MemberLandingPageComponent', () => {
  let component: MemberLandingPageComponent;
  let fixture: ComponentFixture<MemberLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
