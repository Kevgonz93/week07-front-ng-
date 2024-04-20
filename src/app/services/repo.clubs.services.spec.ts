import { TestBed } from '@angular/core/testing';

import { RepoArticlesService } from './repo.clubs.service';

describe('RepoArticlesService', () => {
  let service: RepoArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
