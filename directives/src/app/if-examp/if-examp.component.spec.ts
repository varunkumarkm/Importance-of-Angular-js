import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfExampComponent } from './if-examp.component';

describe('IfExampComponent', () => {
  let component: IfExampComponent;
  let fixture: ComponentFixture<IfExampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfExampComponent]
    });
    fixture = TestBed.createComponent(IfExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
