import { Component, OnInit } from '@angular/core';
import { BusinessProfile, Reviews } from 'src/app/shared/models/business-profile';
import { BusinessProfileService } from './business-profile.service';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent implements OnInit {

  constructor(private service:BusinessProfileService) { }

  businessProfile: BusinessProfile;
  reviews: Reviews[];
  customOptions: any = {
    loop: true,
    margin: 20,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.getProfile();
    this.getBusinessReviewws();
  }

  getProfile(){
    this.service.getBusinessProfile(2).subscribe(data =>{
      console.log(data);
      
      this.businessProfile = data;      
    })
  }

  getBusinessReviewws(){
    this.service.getBusinessReviewws(2).subscribe((data:any) =>{
      this.reviews = data.content;
    console.log(this.reviews);

    })
  }

}
