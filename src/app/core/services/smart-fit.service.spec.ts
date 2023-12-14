import { TestBed } from '@angular/core/testing';

import { SmartFitService } from './smart-fit.service';

describe('SmartFitService', () => {
  let service: SmartFitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartFitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
