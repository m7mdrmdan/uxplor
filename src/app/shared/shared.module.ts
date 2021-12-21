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
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TagsComponent } from './components/tags/tags.component';
import { RatingComponent } from './components/rating/rating.component';
import { TabsBarComponent } from './components/tabs-bar/tabs-bar.component';


const sharedModules = [
  TranslateModule,
  LazyLoadImageModule,
  CarouselModule
];

const sharedComponents = [
  TabsBarComponent,
  TagsComponent,
  RatingComponent
];

const sharedPipes = [
  UnitValueConverterPipe,
  UnitConverterPipe,
  CustomDatePipe,
  DaysConverterPipe,
  TimeFormat,
  SafeUrlPipe,
];


@NgModule({
  imports: [
    CommonModule,
    BootstrapModule,
    sharedModules
  ],
  providers: [SpinnerService],
  declarations: [
    sharedComponents,
    sharedPipes
  ],
  exports: [
    sharedModules,
    sharedComponents
  ],
})
export class SharedModule {}