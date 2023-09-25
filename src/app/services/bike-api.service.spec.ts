import { TestBed } from '@angular/core/testing';

import { BikeApiService } from './bike-api.service';

describe('BikeApiService', () => {
  let service: BikeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
