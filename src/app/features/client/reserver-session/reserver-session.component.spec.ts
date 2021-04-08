import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverSessionComponent } from './reserver-session.component';

describe('ReserverSessionComponent', () => {
  let component: ReserverSessionComponent;
  let fixture: ComponentFixture<ReserverSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
