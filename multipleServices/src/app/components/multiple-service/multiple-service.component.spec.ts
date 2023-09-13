import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleServiceComponent } from './multiple-service.component';

describe('MultipleServiceComponent', () => {
  let component: MultipleServiceComponent;
  let fixture: ComponentFixture<MultipleServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleServiceComponent]
    });
    fixture = TestBed.createComponent(MultipleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
