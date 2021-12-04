import { BootstrapModule } from './../../shared/bootstrap-modules/bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CardActionComponent } from './card-action/card-action.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPetmanComponent } from './about-petman/about-petman.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BrandsComponent } from './brands/brands.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { BannerComponent } from './banner/banner.component';
import { ScrollableCardsComponent } from './scrollable-cards/scrollable-cards.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardActionComponent,
    AboutPetmanComponent,
    CustomerFeedbackComponent,
    HeaderComponent,
    NavbarComponent,
    GallaryComponent,
    BrandsComponent,
    BannerComponent,
    ScrollableCardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,SlickCarouselModule,FormsModule,ReactiveFormsModule,BootstrapModule
  ]
})
export class HomeModule { }
