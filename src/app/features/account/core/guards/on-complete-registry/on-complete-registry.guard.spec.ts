import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { onCompleteRegistryGuard } from './on-complete-registry.guard';

describe('onCompleteRegistryGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onCompleteRegistryGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
