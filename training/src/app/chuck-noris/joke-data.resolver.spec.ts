import { TestBed } from '@angular/core/testing';

import { JokeDataResolver } from './joke-data.resolver';

describe('JokeDataResolver', () => {
  let resolver: JokeDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(JokeDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});