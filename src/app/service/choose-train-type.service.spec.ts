import { TestBed } from '@angular/core/testing';

import { ChooseTrainTypeService } from './choose-train-type.service';

describe('ChooseTrainTypeService', () => {
  let service: ChooseTrainTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseTrainTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
