import { TestBed } from '@angular/core/testing';

import { Url.ConstantService } from './url.constant.service';

describe('Url.ConstantService', () => {
  let service: Url.ConstantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Url.ConstantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
