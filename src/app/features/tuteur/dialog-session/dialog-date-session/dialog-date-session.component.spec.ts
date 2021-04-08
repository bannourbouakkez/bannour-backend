import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDateSessionComponent } from './dialog-date-session.component';

describe('DialogDateSessionComponent', () => {
  let component: DialogDateSessionComponent;
  let fixture: ComponentFixture<DialogDateSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDateSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
