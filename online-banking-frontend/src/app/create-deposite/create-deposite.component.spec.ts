import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDepositeComponent } from './create-deposite.component';

describe('CreateDepositeComponent', () => {
  let component: CreateDepositeComponent;
  let fixture: ComponentFixture<CreateDepositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDepositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDepositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
