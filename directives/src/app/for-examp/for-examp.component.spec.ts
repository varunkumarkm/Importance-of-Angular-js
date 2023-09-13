import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForExampComponent } from './for-examp.component';

describe('ForExampComponent', () => {
  let component: ForExampComponent;
  let fixture: ComponentFixture<ForExampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForExampComponent]
    });
    fixture = TestBed.createComponent(ForExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
