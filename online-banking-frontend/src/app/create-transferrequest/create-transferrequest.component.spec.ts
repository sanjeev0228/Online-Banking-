import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransferrequestComponent } from './create-transferrequest.component';

describe('CreateTransferrequestComponent', () => {
  let component: CreateTransferrequestComponent;
  let fixture: ComponentFixture<CreateTransferrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransferrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTransferrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
