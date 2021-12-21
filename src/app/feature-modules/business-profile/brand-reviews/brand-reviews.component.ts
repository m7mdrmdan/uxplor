import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from 'src/app/shared/models/business-profile';

@Component({
  selector: 'app-brand-reviews',
  templateUrl: './brand-reviews.component.html',
  styleUrls: ['./brand-reviews.component.scss']
})
export class BrandReviewsComponent implements OnInit {

  @Input() reviews:Reviews;
  ratingValue = 4;
  customOptions: any = {
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
      768: {
        items:3
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}