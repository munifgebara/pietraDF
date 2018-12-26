import { TestBed } from '@angular/core/testing';

import { DSServiceService } from './dsservice.service';

describe('DSServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DSServiceService = TestBed.get(DSServiceService);
    expect(service).toBeTruthy();
  });
});
