import { TestBed } from '@angular/core/testing';

import { QuickStartService } from './quick-start.service';

describe('QuickStartService', () => {
  let service: QuickStartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickStartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
