import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanrequestComponent } from './create-loanrequest.component';

describe('CreateLoanrequestComponent', () => {
  let component: CreateLoanrequestComponent;
  let fixture: ComponentFixture<CreateLoanrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLoanrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoanrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
