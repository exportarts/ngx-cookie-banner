import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxCookieBannerComponent } from './components/ngx-cookie-banner/ngx-cookie-banner.component';
import { defaultConfig, NgxCookieBannerConfig, NGX_COOKIE_BANNER_CONFIG } from './config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxCookieBannerComponent
  ],
  exports: [
    NgxCookieBannerComponent
  ]
})
export class NgxCookieBannerModule {

  constructor(
    @Optional() @SkipSelf()
    parent: NgxCookieBannerModule
  ) {
    if (parent) {
      throw new Error(`${parent.constructor.name} already loaded. Only import it once in your AppModule via forRoot()!`);
    }
  }

  /**
   * 
   * @param config Optional config. If not provided, defaults will be used.
   */
  static forRoot(config?: NgxCookieBannerConfig): ModuleWithProviders<NgxCookieBannerModule> {
    return {
      ngModule: NgxCookieBannerModule,
      providers: [
        {
          provide: NGX_COOKIE_BANNER_CONFIG,
          useValue: Object.assign(defaultConfig, config)
        }
      ]
    };
  }
}
