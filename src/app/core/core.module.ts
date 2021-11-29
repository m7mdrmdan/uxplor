import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { SharedModule } from '../shared/shared.module';
import { BootstrapModule } from '../shared/bootstrap-modules/bootstrap.module';
import { LoaderInterceptor } from './interceptors/spinner.interceptor';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SharedModule,
    BootstrapModule,
  ],
  exports: [  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
