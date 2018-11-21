import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snakbar.service';

describe('SnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackbarService = TestBed.get(SnackbarService);
    expect(service).toBeTruthy();
  });
});
