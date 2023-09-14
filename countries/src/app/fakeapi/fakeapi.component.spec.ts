import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeapiComponent } from './fakeapi.component';

describe('FakeapiComponent', () => {
  let component: FakeapiComponent;
  let fixture: ComponentFixture<FakeapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeapiComponent]
    });
    fixture = TestBed.createComponent(FakeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
