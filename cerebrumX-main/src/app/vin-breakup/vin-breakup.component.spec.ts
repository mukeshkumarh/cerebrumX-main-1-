import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VINBreakupComponent } from './vin-breakup.component';

describe('VINBreakupComponent', () => {
  let component: VINBreakupComponent;
  let fixture: ComponentFixture<VINBreakupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VINBreakupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VINBreakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
