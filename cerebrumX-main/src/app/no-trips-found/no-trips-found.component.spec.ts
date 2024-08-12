import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTripsFoundComponent } from './no-trips-found.component';

describe('NoTripsFoundComponent', () => {
  let component: NoTripsFoundComponent;
  let fixture: ComponentFixture<NoTripsFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTripsFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTripsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
