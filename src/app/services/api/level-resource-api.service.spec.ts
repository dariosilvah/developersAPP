import {TestBed} from '@angular/core/testing';

import {LevelsResourceApiService} from './levels-resource-api.service';

describe('LevelResourceApiService', () => {
  let service: LevelsResourceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelsResourceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
