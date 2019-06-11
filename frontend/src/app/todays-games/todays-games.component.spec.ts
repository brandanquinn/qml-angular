import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysGamesComponent } from './todays-games.component';

describe('TodaysGamesComponent', () => {
  let component: TodaysGamesComponent;
  let fixture: ComponentFixture<TodaysGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
