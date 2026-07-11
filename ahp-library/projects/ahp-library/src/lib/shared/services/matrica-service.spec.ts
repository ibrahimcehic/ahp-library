import { TestBed } from '@angular/core/testing';

import { MatricaService } from './matrica-service';

describe('MatricaService', () => {
  let service: MatricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
