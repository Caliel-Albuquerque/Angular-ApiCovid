import { TestBed } from '@angular/core/testing';

import { StatesBrazilService } from './states-brazil.service';

describe('StatesBrazilService', () => {
  let service: StatesBrazilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatesBrazilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
