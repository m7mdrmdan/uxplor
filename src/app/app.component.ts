import { Component, OnInit } from '@angular/core';
import { Languages } from './shared/constants/defines';
import { LocalizationService } from './core/services/storage/localization.service';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public direction: string;
  translateSubscription: Subscription;

  constructor(
    private locale: LocalizationService,
    private translate: TranslateService,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0,0);
      }
    });

  }

  ngOnInit() {
    this.locale.setDefaultLocale(Languages.defaultAr);
    // this.direction = this.child.direction;
    this.onloading();
  }

  hideNav(event) {
    if (event.target.classList.value === 'nav-backdrop') {
    }
  }
  onloading() {
    this.translateSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        const lang = event.lang;
        this.direction =
          lang === Languages.defaultAr || lang === Languages.en ? 'rtl' : 'ltr';
      }
    );
  }


  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

}
