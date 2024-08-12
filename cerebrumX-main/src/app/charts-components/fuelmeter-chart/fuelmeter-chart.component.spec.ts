import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelmeterChartComponent } from './fuelmeter-chart.component';

describe('FuelmeterChartComponent', () => {
  let component: FuelmeterChartComponent;
  let fixture: ComponentFixture<FuelmeterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelmeterChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelmeterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
