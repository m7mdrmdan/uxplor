import { TestBed, inject, async } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
  TranslateService
} from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocalizationService } from './localization.service';
import { StorageService } from './storage.service';
import { SessionStorage } from './session-storage';
import { LocalStorage } from './local-storage';
import { CookiesStorage } from './cookies-storage';
import { CookieService } from 'ngx-cookie-service';
import { StorageType } from 'src/app/shared/enums/storage.enum';

describe('LocalizationService', () => {
  let localizationServiceInstance: LocalizationService;
  let translateServiceInstance: TranslateService;
  let storageServiceInstance: StorageService;

  beforeEach(async(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        }),
        SharedModule
      ],
      providers: [
        TranslateService,
        LocalizationService,
        StorageService,
        SessionStorage,
        LocalStorage,
        CookiesStorage,
        CookieService
      ]
    }).compileComponents();
    localizationServiceInstance = TestBed.get(LocalizationService);
    translateServiceInstance = TestBed.get(TranslateService);
    storageServiceInstance = TestBed.get(StorageService);
  }));

  it('should create the service', () => {
    expect(localizationServiceInstance).toBeTruthy();
  });

  it('should use the cashed language if any', () => {
    spyOn(storageServiceInstance, 'getStorage').and.returnValue('ar');
    const useSpy = spyOn(translateServiceInstance, 'use');
    localizationServiceInstance.setDefaultLocale('en');
    expect(useSpy).toHaveBeenCalledWith('ar');
  });

  it('should use the default language if there is no cashed language', () => {
    const getStorageSpy = spyOn(
      storageServiceInstance,
      'getStorage'
    ).and.returnValue(null);
    const setLocaleSpy = spyOn(localizationServiceInstance, 'setLocale');
    localizationServiceInstance.setDefaultLocale('en');
    expect(setLocaleSpy).toHaveBeenCalledWith('en');
  });

  it('should set the locale', () => {
    const setStorageSpy = spyOn(storageServiceInstance, 'setStorage');
    const useSpy = spyOn(translateServiceInstance, 'use');
    localizationServiceInstance.setLocale('ar');
    expect(setStorageSpy).toHaveBeenCalledWith(
      'locale',
      'ar',
      StorageType.cookiesStorage
    );
    expect(useSpy).toHaveBeenCalledWith('ar');
  });
});
