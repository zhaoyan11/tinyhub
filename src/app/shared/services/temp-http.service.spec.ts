import { TestBed } from '@angular/core/testing';

import { TempHttpService } from './temp-http.service';

describe('TempHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempHttpService = TestBed.get(TempHttpService);
    expect(service).toBeTruthy();
  });
});
