import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { AuthGuard } from './auth-guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, Router]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
