import { TestBed } from '@angular/core/testing';

import { KeyPressDistributionService } from './key-press-distribution.service';

describe('KeyPressDistributionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyPressDistributionService = TestBed.get(KeyPressDistributionService);
    expect(service).toBeTruthy();
  });
});
