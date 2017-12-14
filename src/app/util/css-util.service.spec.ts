import { TestBed, inject } from '@angular/core/testing';

import { CssUtilService } from './css-util.service';

describe('CssUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CssUtilService]
    });
  });

  it('should be created', inject([CssUtilService], (service: CssUtilService) => {
    expect(service).toBeTruthy();
  }));
});
