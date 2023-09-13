import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsellerComponent } from './carseller.component';

describe('CarsellerComponent', () => {
  let component: CarsellerComponent;
  let fixture: ComponentFixture<CarsellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsellerComponent]
    });
    fixture = TestBed.createComponent(CarsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
