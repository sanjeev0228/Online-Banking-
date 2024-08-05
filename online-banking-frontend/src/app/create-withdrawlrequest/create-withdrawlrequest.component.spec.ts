import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWithdrawlrequestComponent } from './create-withdrawlrequest.component';

describe('CreateWithdrawlrequestComponent', () => {
  let component: CreateWithdrawlrequestComponent;
  let fixture: ComponentFixture<CreateWithdrawlrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWithdrawlrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWithdrawlrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
