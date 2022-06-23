import { TestBed } from '@angular/core/testing';

import { RockStarGamesService } from './rock-star-games.service';

describe('RockStarGamesService', () => {
  let service: RockStarGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockStarGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
