import {TestBed} from '@angular/core/testing';

import {DevelopersResourceApiService} from './developers-resource-api.service';

describe('DevelopersResourceApiService', () => {
  let service: DevelopersResourceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopersResourceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
