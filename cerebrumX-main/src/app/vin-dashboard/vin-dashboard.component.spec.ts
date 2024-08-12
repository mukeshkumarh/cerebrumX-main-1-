import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinDashboardComponent } from './vin-dashboard.component';

describe('VinDashboardComponent', () => {
  let component: VinDashboardComponent;
  let fixture: ComponentFixture<VinDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
