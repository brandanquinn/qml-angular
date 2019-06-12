import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictByDateComponent } from './predict-by-date.component';

describe('PredictByDateComponent', () => {
  let component: PredictByDateComponent;
  let fixture: ComponentFixture<PredictByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
