import { TestBed } from '@angular/core/testing';

import { MethodApiServiceService } from './method-api-service.service';

describe('MethodApiServiceService', () => {
  let service: MethodApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
