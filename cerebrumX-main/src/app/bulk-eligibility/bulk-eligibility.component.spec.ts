import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEligibilityComponent } from './bulk-eligibility.component';

describe('BulkEligibilityComponent', () => {
  let component: BulkEligibilityComponent;
  let fixture: ComponentFixture<BulkEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkEligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
