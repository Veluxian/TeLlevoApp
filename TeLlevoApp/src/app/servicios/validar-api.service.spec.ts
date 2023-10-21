import { TestBed } from '@angular/core/testing';

import { ValidarApiService } from './validar-api.service';

describe('ValidarApiService', () => {
  let service: ValidarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
