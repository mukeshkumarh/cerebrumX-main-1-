import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvSectionComponent } from './ev-section.component';

describe('EvSectionComponent', () => {
  let component: EvSectionComponent;
  let fixture: ComponentFixture<EvSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
