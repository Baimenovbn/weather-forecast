import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastByCityControllerComponent } from './forecast-by-city-controller.component';

describe('ForecastByCityControllerComponent', () => {
  let component: ForecastByCityControllerComponent;
  let fixture: ComponentFixture<ForecastByCityControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastByCityControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastByCityControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
