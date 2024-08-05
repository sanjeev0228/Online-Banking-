import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChequerequestComponent } from './create-chequerequest.component';

describe('CreateChequerequestComponent', () => {
  let component: CreateChequerequestComponent;
  let fixture: ComponentFixture<CreateChequerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChequerequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChequerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
