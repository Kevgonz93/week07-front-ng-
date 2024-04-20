import { TestBed } from '@angular/core/testing';

import { RepoUserService } from './repo.user.service';

describe('RepoUserService', () => {
  let service: RepoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
