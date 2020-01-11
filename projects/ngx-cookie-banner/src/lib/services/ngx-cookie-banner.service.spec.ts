import { TestBed } from '@angular/core/testing';

import { NgxCookieBannerService } from './ngx-cookie-banner.service';

describe('NgxCookieBannerService', () => {
  let service: NgxCookieBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookieBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
