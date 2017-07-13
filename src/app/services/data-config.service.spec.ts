import { TestBed, inject } from '@angular/core/testing';

import { ConfigDataService } from './config-data.service';

describe('ConfigDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigDataService]
    });
  });

  it('should be created', inject([ConfigDataService], (service: ConfigDataService) => {
    expect(service).toBeTruthy();
  }));
});
