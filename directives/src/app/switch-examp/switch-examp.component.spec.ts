import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchExampComponent } from './switch-examp.component';

describe('SwitchExampComponent', () => {
  let component: SwitchExampComponent;
  let fixture: ComponentFixture<SwitchExampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchExampComponent]
    });
    fixture = TestBed.createComponent(SwitchExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
