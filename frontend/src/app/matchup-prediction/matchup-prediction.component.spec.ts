import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupPredictionComponent } from './matchup-prediction.component';

describe('MatchupPredictionComponent', () => {
  let component: MatchupPredictionComponent;
  let fixture: ComponentFixture<MatchupPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
