import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {
  public direction: string;
  translateSubscription: Subscription;

  // isAppLoaded: boolean;

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
    // this.isAppLoaded = false;
    this.locale.setDefaultLocale(Languages.defaultEn);
    // this.direction = this.child.direction;
    this.onloading();
  }

  ngAfterViewInit(): void {
  //   this.isAppLoaded = true;
  }

  hideNav(event) {
    if (event.target.classList.value === 'nav-backdrop') {
    }
  }
  onloading() {
    this.translateSubscription = this.translate.onLangChange.subscribe(
      (event) => {
        const lang = event.lang;
        this.direction = lang === Languages.ar ? 'rtl' : 'ltr';
      }
    );
  }


  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

}
