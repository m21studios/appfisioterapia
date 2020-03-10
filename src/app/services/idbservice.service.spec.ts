import { TestBed } from '@angular/core/testing';

import { IdbserviceService } from './idbservice.service';

describe('IdbserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdbserviceService = TestBed.get(IdbserviceService);
    expect(service).toBeTruthy();
  });
});
