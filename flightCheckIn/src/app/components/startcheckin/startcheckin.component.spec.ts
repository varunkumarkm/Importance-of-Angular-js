import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcheckinComponent } from './startcheckin.component';

describe('StartcheckinComponent', () => {
  let component: StartcheckinComponent;
  let fixture: ComponentFixture<StartcheckinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartcheckinComponent]
    });
    fixture = TestBed.createComponent(StartcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
