import { TestBed } from '@angular/core/testing';

import { DialogDateService } from './dialog-date.service';

describe('DialogDateService', () => {
  let service: DialogDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
