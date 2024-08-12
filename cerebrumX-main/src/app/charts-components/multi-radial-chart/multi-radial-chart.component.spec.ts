import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRadialChartComponent } from './multi-radial-chart.component';

describe('MultiRadialChartComponent', () => {
  let component: MultiRadialChartComponent;
  let fixture: ComponentFixture<MultiRadialChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRadialChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiRadialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
