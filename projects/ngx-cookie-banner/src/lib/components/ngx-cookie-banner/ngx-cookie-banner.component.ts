import { AnimationEvent } from '@angular/animations';
import { AfterViewInit, Component, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import translateInOutAnimation from '../../animations/translate-in-out.animation';
import { NgxCookieBannerService } from '../../services/ngx-cookie-banner.service';

@Component({
  selector: 'ngx-cookie-banner',
  templateUrl: './ngx-cookie-banner.component.html',
  styleUrls: ['./ngx-cookie-banner.component.scss'],
  animations: [translateInOutAnimation()],
  encapsulation: ViewEncapsulation.None
})
export class NgxCookieBannerComponent implements AfterViewInit {

  /**
   * @private this property is intended to be used internally!
   */
  _transition: 'void' | 'bottomOut';
  /**
   * @private this property is intended to be used internally!
   */
  _removeComponent = true;

  /**
   * Use this observable to be notified about cookie status changes.
   */
  @Output()
  isSeen: Observable<boolean>;

  constructor(
    private readonly service: NgxCookieBannerService
  ) {
    this.isSeen = this.service.isSeen.pipe(
      tap(status => {
        if (!status) {
          this._removeComponent = false;
        }
        if (status) {
          this._transition = 'bottomOut';
        }
      })
    );
  }

  ngAfterViewInit() {
    // TODO: Find solution without timeout
    setTimeout(() => this.service.emitCookieStatus(), 1)
  }

  /**
   * Hide the cookie banner and set a cookie to store consent.
   */
  dismiss() {
    this.service.storeCookie();
  }

  /**
   * @private this function is intended to be used internally!
   */
  _onAnimationFinish(evt: AnimationEvent): void {
    if (evt.toState === 'topOut' || evt.toState === 'bottomOut') {
      this._removeComponent = true;
    }
  }

}
