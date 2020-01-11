import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NgxCookieBannerConfig, NGX_COOKIE_BANNER_CONFIG } from '../config';

@Injectable({
  providedIn: 'root'
})
export class NgxCookieBannerService {

  /**
   * Indicates the status of the cookie.
   */
  readonly isSeen = new EventEmitter<boolean>();

  constructor(
    @Inject(PLATFORM_ID)
    private readonly platform: Object,
    @Inject(NGX_COOKIE_BANNER_CONFIG)
    private readonly config: NgxCookieBannerConfig
  ) { }

  /**
   * Instruct the service to emit the next value of
   * `NgxCookieBannerService#isSeen`.
   */
  emitCookieStatus() {
    if (isPlatformBrowser(this.platform)) {
      this.isSeen.next(this.cookieExists(this.config.cookieName));
    }
  }

  /**
   * Store the cookie that indicates that the cookie banner
   * has been seen.
   */
  storeCookie() {
    this.setCookie(this.config.cookieName, this.config.expirationDays);
    this.emitCookieStatus();
  }

  /**
   * Check if a cookie exists.
   *
   * @param name cookie name
   */
  private cookieExists(name: string): boolean {
    if (document.cookie.split(';').filter((item) => item.trim().startsWith(`${name}=`)).length) {
      return true;
    }
    return false;
  }

  /**
   * Set a cookie.
   *
   * @param name cookie name
   * @param expiration number of days the cookie will be valid
   */
  private setCookie(name: string, expiration?: number) {
    const now: Date = new Date();
    const exp: Date = new Date(now.getTime() + expiration * 86_400_000);

    const cookieString = encodeURIComponent(name) + `=true;path=/;expires=${exp.toUTCString()};`;

    if (isPlatformBrowser(this.platform)) {
      document.cookie = cookieString;
    }
  }
}
