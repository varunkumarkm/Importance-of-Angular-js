import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomCarsComponent } from './showroom-cars.component';

describe('ShowroomCarsComponent', () => {
  let component: ShowroomCarsComponent;
  let fixture: ComponentFixture<ShowroomCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowroomCarsComponent]
    });
    fixture = TestBed.createComponent(ShowroomCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
