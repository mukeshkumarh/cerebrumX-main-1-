import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistColumnChartComponent } from './dist-column-chart.component';

describe('DistColumnChartComponent', () => {
  let component: DistColumnChartComponent;
  let fixture: ComponentFixture<DistColumnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistColumnChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
