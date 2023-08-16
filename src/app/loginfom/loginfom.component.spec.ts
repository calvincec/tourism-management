import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfomComponent } from './loginfom.component';

describe('LoginfomComponent', () => {
  let component: LoginfomComponent;
  let fixture: ComponentFixture<LoginfomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginfomComponent]
    });
    fixture = TestBed.createComponent(LoginfomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
