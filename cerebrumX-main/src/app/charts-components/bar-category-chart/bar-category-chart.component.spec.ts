import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCategoryChartComponent } from './bar-category-chart.component';

describe('BarCategoryChartComponent', () => {
  let component: BarCategoryChartComponent;
  let fixture: ComponentFixture<BarCategoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCategoryChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarCategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
