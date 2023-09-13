import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseConverterComponent } from './uppercase-converter.component';

describe('UppercaseConverterComponent', () => {
  let component: UppercaseConverterComponent;
  let fixture: ComponentFixture<UppercaseConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UppercaseConverterComponent]
    });
    fixture = TestBed.createComponent(UppercaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
