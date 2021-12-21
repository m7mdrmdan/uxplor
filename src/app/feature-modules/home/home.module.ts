import { BootstrapModule } from './../../shared/bootstrap-modules/bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardActionComponent } from './card-action/card-action.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPetmanComponent } from './about-petman/about-petman.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrandsComponent } from './brands/brands.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { BannerComponent } from './banner/banner.component';
import { ScrollableCardsComponent } from './scrollable-cards/scrollable-cards.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardActionComponent,
    AboutPetmanComponent,
    CustomerFeedbackComponent,
    HeaderComponent,
    NavbarComponent,
    GalleryComponent,
    BrandsComponent,
    BannerComponent,
    ScrollableCardsComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,FormsModule,ReactiveFormsModule,BootstrapModule
  ],
  exports: [
    CardActionComponent,
    CustomerFeedbackComponent,
    HeaderComponent,
    NavbarComponent,
    GalleryComponent,
    BrandsComponent,
    BannerComponent,
    ScrollableCardsComponent,
    SubHeaderComponent
  ]
})
export class HomeModule { }
