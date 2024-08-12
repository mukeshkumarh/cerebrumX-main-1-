import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoVinComponent } from './tco-vin.component';

describe('TcoVinComponent', () => {
  let component: TcoVinComponent;
  let fixture: ComponentFixture<TcoVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcoVinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcoVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
