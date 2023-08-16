import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiriesComponent } from './enquiries.component';

describe('EnquiriesComponent', () => {
  let component: EnquiriesComponent;
  let fixture: ComponentFixture<EnquiriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiriesComponent]
    });
    fixture = TestBed.createComponent(EnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
