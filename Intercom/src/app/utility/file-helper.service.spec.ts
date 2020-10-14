import { TestBed, inject } from '@angular/core/testing';

import { FileHelperService } from './file-helper.service';

describe('FileHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileHelperService]
    });
  });

  it('should be created', inject([FileHelperService], (service: FileHelperService) => {
    expect(service).toBeTruthy();
  }));
});

describe('FileHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileHelperService]
    });
  });

  it('should return false if filename or customer data is null', inject([FileHelperService], (service: FileHelperService) => {
    expect(service.fileDownload(null, null)).toBeFalsy();
  }));
});
