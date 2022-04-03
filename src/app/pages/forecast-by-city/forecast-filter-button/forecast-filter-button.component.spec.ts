import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastFilterButtonComponent } from './forecast-filter-button.component';

describe('ForecastFilterButtonComponent', () => {
  let component: ForecastFilterButtonComponent;
  let fixture: ComponentFixture<ForecastFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastFilterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
