import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CardActionComponent } from './card-action/card-action.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPetmanComponent } from './about-petman/about-petman.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BrandsComponent } from './brands/brands.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardActionComponent,
    AboutPetmanComponent,
    GallaryComponent,
    BrandsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
