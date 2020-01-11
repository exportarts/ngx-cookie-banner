import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieBannerComponent } from './ngx-cookie-banner.component';

describe('NgxCookieBannerComponent', () => {
  let component: NgxCookieBannerComponent;
  let fixture: ComponentFixture<NgxCookieBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
