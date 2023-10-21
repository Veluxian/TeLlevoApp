import { TestBed } from '@angular/core/testing';

import { JuanchoGuard } from './juancho.guard';

describe('JuanchoGuard', () => {
  let guard: JuanchoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JuanchoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
