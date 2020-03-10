import { TestBed } from '@angular/core/testing';

import { AlmacenamientoService } from './almacenamiento.service';

describe('AlmacenamientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlmacenamientoService = TestBed.get(AlmacenamientoService);
    expect(service).toBeTruthy();
  });
});
