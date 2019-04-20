import { PasswordService } from './password.service';
import { TestBed } from '@angular/core/testing';

describe('PasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordService = TestBed.get(PasswordService);
    expect(service).toBeTruthy();
  });
});
