import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
        private translateService: TranslateService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = ''
        return next.handle(req);
    }

}
