import { TestBed } from '@angular/core/testing';

import { ScbService } from './scb.service';

describe('ScbService', () => {
  let service: ScbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
