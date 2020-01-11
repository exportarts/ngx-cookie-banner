import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCookieBannerModule } from 'projects/ngx-cookie-banner/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /**
     * Import the module via its `forRoot()` method!
     */
    NgxCookieBannerModule.forRoot({
      cookieName: 'ngx-cookie-banner-demo-app',
      expirationDays: 1
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
