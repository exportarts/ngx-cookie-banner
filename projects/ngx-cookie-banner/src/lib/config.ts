import { InjectionToken } from '@angular/core';

export const NGX_COOKIE_BANNER_CONFIG = new InjectionToken('NGX_COOKIE_BANNER_CONFIG');

export interface NgxCookieBannerConfig {
    cookieName?: string;
    expirationDays?: number;
}

export const defaultConfig: Required<NgxCookieBannerConfig> = {
    cookieName: 'ngx-cookie-banner',
    expirationDays: 365
}
