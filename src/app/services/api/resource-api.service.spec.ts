import {TestBed} from '@angular/core/testing';
import {ResourceApiService} from './resource-api.service';

interface Post {
  id?: number;
}

interface Comment {
  id?: number;
}

describe('ResourceApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created with parent', () => {
    const service: ResourceApiService<Comment, Post> = TestBed.get(ResourceApiService);
    expect(service).toBeTruthy();
  });

  it('should be created without parent', () => {
    const service: ResourceApiService<Comment> = TestBed.get(ResourceApiService);
    expect(service).toBeTruthy();
  });
});
