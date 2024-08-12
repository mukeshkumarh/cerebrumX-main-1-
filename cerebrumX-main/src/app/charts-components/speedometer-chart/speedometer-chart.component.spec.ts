import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedometerChartComponent } from './speedometer-chart.component';

describe('SpeedometerChartComponent', () => {
  let component: SpeedometerChartComponent;
  let fixture: ComponentFixture<SpeedometerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedometerChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedometerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
