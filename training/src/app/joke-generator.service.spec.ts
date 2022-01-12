import { TestBed } from '@angular/core/testing';

import { JokeGeneratorService } from './joke-generator.service';

describe('JokeMakerService', () => {
  let service: JokeGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
