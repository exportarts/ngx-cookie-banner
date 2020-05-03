# ngx-cookie-banner

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![npm](https://img.shields.io/npm/v/ngx-cookie-banner.svg)](https://www.npmjs.com/package/ngx-cookie-banner)
[![Build Status](https://travis-ci.com/exportarts/ngx-cookie-banner.svg?branch=master)](https://travis-ci.com/exportarts/ngx-cookie-banner)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=exportarts_ngx-cookie-banner&metric=alert_status)](https://sonarcloud.io/dashboard?id=exportarts_ngx-cookie-banner)

## Motivation

This lib is inspired by [angular2-cookie-law](https://github.com/andreasonny83/angular2-cookie-law)
which seems to be discontinued. Therefore, I rewrote the main
functionality and removed much of the opinionated styles and
behaviour.

## Getting Started

**Install the dependency**

`npm i --save-exact ngx-cookie-banner`

**Import NgxCookieBannerModule**

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCookieBannerModule } from 'ngx-cookie-banner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxCookieBannerModule.forRoot({
      cookieName: 'ngx-cookie-banner-demo-app',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Use the component**

```html
<!-- app.component.html -->

<ngx-cookie-banner #cookie>
    <div class="banner-inner">
        <span>
            We use Cookies!
            <a role="button" (click)="cookie.dismiss()">dismiss</a>
        </span>
    </div>
</ngx-cookie-banner>
```

```css
/* app.component.scss */

.banner-inner {
    background: red;
}
.banner-inner a {
    font-weight: bold;
    cursor: pointer;
}
```

```ts
/* app.component.ts */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild('cookie', { static: true })
  banner: NgxCookieBannerComponent;

  private _cookieSub: Subscription;

  // It is currently necessary to manually subscribe at this
  // point to initialize the banner component.
  ngAfterViewInit() {
    this._cookieSub = this.banner.isSeen.subscribe();
  }

  ngOnDestroy() {
    this._cookieSub.unsubscribe();
  }

}
```
