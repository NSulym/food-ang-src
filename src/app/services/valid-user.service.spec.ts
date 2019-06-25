import { TestBed } from '@angular/core/testing';

import { ValidUserService } from './valid-user.service';

describe('ValidUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidUserService = TestBed.get(ValidUserService);
    expect(service).toBeTruthy();
  });
});
