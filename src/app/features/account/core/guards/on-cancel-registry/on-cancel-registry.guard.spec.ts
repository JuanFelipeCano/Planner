import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { onCancelRegistryGuard } from './on-cancel-registry.guard';

describe('onCancelRegistryGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onCancelRegistryGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
