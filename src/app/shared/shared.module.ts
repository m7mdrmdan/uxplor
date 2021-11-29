import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { BootstrapModule } from "./bootstrap-modules/bootstrap.module";
import { UnitValueConverterPipe } from "./pipes/unit-value-converter.pipe";
import { UnitConverterPipe } from "./pipes/unit-converter.pipe";
import { CustomDatePipe } from "src/app/shared/pipes/custom-date.pipe";
import { DaysConverterPipe } from "./pipes/days-converter.pipe";
import { SpinnerService } from "../core/services/spinner.service";
import { TimeFormat } from "./pipes/time-format";
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BootstrapModule,
    LazyLoadImageModule,
  ],
  providers: [SpinnerService],
  declarations: [
    UnitValueConverterPipe,
    UnitConverterPipe,
    TimeFormat,
    CustomDatePipe,
    DaysConverterPipe,
    SafeUrlPipe,
  ],
  exports: [
    UnitValueConverterPipe,
    UnitConverterPipe,
    CustomDatePipe,
    DaysConverterPipe,
    TimeFormat,
    SafeUrlPipe
  ],
})
export class SharedModule {}
