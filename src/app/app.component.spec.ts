import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { SpinnerService } from './core/services/spinner.service';
import { LocalizationService } from './core/services/storage/localization.service';
import { ErrorService } from './core/services/error.service';
import {
  TranslateService,
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
// tslint:disable-next-line:max-line-length
import { FooterContractsAndCopyrightComponent } from './core/components/footer/footer-contracts-and-copyright/footer-contracts-and-copyright.component';
import { BootstrapModule } from './shared/bootstrap-modules/bootstrap.module';
import { StorageService } from './core/services/storage/storage.service';
import { SessionStorage } from './core/services/storage/session-storage';
import { LocalStorage } from './core/services/storage/local-storage';
import { CookiesStorage } from './core/services/storage/cookies-storage';
import { CookieService } from 'ngx-cookie-service';
import { RoutingService } from './core/services/routing.service';
import { UserService } from './core/services/user.service';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Languages } from './shared/constants/defines';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Observable } from 'rxjs';

class FakeHttpClient {}

class FakeErrorService {
  errorModal = Observable.of({ show: true });
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let localizationServiceInstance: LocalizationService;

  beforeEach(async(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule,
        SharedModule,
        BootstrapModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      declarations: [AppComponent],
      providers: [
        SpinnerService,
        LocalizationService,
        TranslateService,
        FooterContractsAndCopyrightComponent,
        StorageService,
        SessionStorage,
        LocalStorage,
        CookiesStorage,
        CookieService,
        RoutingService,
        UserService,
        HttpBackend,
        { provide: HttpClient, useClass: FakeHttpClient },
        { provide: ErrorService, useClass: FakeErrorService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    localizationServiceInstance = TestBed.get(LocalizationService);
  }));

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set the default language', () => {
    const setDefaultLocaleSpy = spyOn(
      localizationServiceInstance,
      'setDefaultLocale'
    );
    fixture.detectChanges();
    expect(setDefaultLocaleSpy).toHaveBeenCalledWith(Languages.defaultAr);
  });

  it('should show the error modal and set its inputs', () => {
    fixture.detectChanges();
    expect(component.showErrorModal).toBe(true);
    expect(component.overlayInputs).toBeTruthy();
  });
});
