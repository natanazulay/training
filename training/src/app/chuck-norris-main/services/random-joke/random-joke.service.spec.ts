import { TestBed } from '@angular/core/testing';

import { RandomJokeService } from './random-joke.service';

describe('RandomJokeService', () => {
  let service: RandomJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
