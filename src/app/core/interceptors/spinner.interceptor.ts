import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { APIConfig } from 'src/config/api-config';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: SpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // APIConfig;
        const APIs = this.filterAPIs(APIConfig);
        if (APIs.indexOf(req.url) !== -1 ) {
            this.loaderService.display(true);
            return next.handle(req).pipe(
                finalize(() => this.loaderService.display(false))
            );
        } else {
            return next.handle(req);
        }
    }
    filterAPIs(obj) {
      const keys = Object.keys(obj);
      let urls: string[] = []
      keys.forEach(key => {
        if (obj[key].showSpinner === true ) {
          urls.push(obj[key].url.split('?')[0]);
        }
      });
      return urls;
    }
}
