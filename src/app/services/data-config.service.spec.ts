import { TestBed, inject } from '@angular/core/testing';

import { DataConfigService } from './data-config';

describe('ConfigDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataConfigService]
    });
  });

  it('should be created', inject([DataConfigService], (service: DataConfigService) => {
    expect(service).toBeTruthy();
  }));
});
