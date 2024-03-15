import { TestBed } from '@angular/core/testing';

import { BrazilService } from './brazil.service';

describe('BrazilService', () => {
  let service: BrazilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrazilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
