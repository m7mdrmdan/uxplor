import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BusinessProfileRoutingModule } from './business-profile-routing.module';
import { BusinessProfileComponent } from './business-profile.component';
import { HomeModule } from '../home/home.module';
import { BrandInfoComponent } from './brand-info/brand-info.component';
import { BootstrapModule } from 'src/app/shared/bootstrap-modules/bootstrap.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrandReviewsComponent } from './brand-reviews/brand-reviews.component';
import { AboutBrandComponent } from './about-brand/about-brand.component';
import { BrandGalleryComponent } from './brand-gallery/brand-gallery.component';


@NgModule({
  declarations: [
    BusinessProfileComponent,
    BrandInfoComponent,
    BrandReviewsComponent,
    AboutBrandComponent,
    BrandGalleryComponent
  ],
  imports: [
    CommonModule,
    BusinessProfileRoutingModule,
    HomeModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModule
  ]
})
export class BusinessProfileModule { }
