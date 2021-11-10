import { TestBed } from '@angular/core/testing';

import { RequestMethods.RepositoryService } from './request-methods.repository.service';

describe('RequestMethods.RepositoryService', () => {
  let service: RequestMethods.RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestMethods.RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
