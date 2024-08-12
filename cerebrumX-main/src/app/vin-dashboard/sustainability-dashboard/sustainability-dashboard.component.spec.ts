import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityDashboardComponent } from './sustainability-dashboard.component';

describe('SustainabilityDashboardComponent', () => {
  let component: SustainabilityDashboardComponent;
  let fixture: ComponentFixture<SustainabilityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainabilityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
