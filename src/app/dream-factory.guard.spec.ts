import { TestBed, async, inject } from '@angular/core/testing';

import { DreamFactoryGuard } from './dream-factory.guard';

describe('DreamFactoryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DreamFactoryGuard]
    });
  });

  it('should ...', inject([DreamFactoryGuard], (guard: DreamFactoryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
