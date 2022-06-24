import { TestBed } from '@angular/core/testing';

import { ArtifactInfoApiService } from './artifact-info-api.service';

describe('ArtifactInfoApiService', () => {
  let service: ArtifactInfoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtifactInfoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
