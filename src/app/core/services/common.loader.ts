import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../../shared/constants/defines';
/**
 * config Loader is a Factory that holds
 * @param config  Configuration Service which contains load function that load file error-message
 */
export function translateConfigLoaderFactory(translateService: TranslateService) {
  return () => {
    // set default as defaultLang will load a local json file as current language if the word didn't available in cms
    // translateService.setDefaultLang(Languages.defaultAr);
    // use en will used external cms as a current language
    // translateService.use(Languages.en);
  };
}
