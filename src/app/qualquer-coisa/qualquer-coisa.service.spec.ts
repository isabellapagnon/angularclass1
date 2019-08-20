import { TestBed } from '@angular/core/testing';

import { QualquerCoisaService } from './qualquer-coisa.service';

describe('QualquerCoisaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QualquerCoisaService = TestBed.get(QualquerCoisaService);
    expect(service).toBeTruthy();
  });
});
