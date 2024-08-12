import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSimulatorComponent } from './trip-simulator.component';

describe('TripSimulatorComponent', () => {
  let component: TripSimulatorComponent;
  let fixture: ComponentFixture<TripSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripSimulatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
