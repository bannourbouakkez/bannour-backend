import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDatesComponent } from './pick-dates.component';

describe('PickDatesComponent', () => {
  let component: PickDatesComponent;
  let fixture: ComponentFixture<PickDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
