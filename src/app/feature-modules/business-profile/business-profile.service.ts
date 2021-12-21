import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConfig } from 'src/config/api-config';
import  JsonQuery from 'jsonpath/jsonpath';
import { map } from 'rxjs/operators';
import { BusinessProfile } from 'src/app/shared/models/business-profile';
import { brandReviews, profileData } from 'src/app/shared/constants/defines';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BusinessProfileService {

  profile:BusinessProfile;

  constructor(private http:HttpClient) { }

  getBusinessProfile(id){
    return of(this.mapBusinessProfile(profileData));
    let url = `${APIConfig.businessProfile.url}${id}`;
    return this.http.get(url).pipe(map(data =>{
      return this.mapBusinessProfile(data); 
    }));
  }
  mapBusinessProfile(res){
    let profile = new BusinessProfile();
    profile.id = res.id || '';
    profile.name = res.name || '';
    profile.link = res.link || '';
    profile.businessType = res.businessType || '';
    profile.track = res.track || '';
    profile.description = res.description || '';
    profile.coverImage = JsonQuery.value(res,'coverImage.url') || null;    
    profile.logoImage = JsonQuery.value(res,'logoImage.url') || null;    
    profile.businessImages = res.businessImages.map(data => data.image.url);
    profile.socialLinks = res.socialLinks || [];
    profile.instagramLink = profile.socialLinks.find(data => data.provider =='INSTAGRAM').link || '';
    profile.businessCategories = res.businessCategories.map(data => data.category.name);
    return profile;
  }

  getBusinessReviewws(id){
    let url = `${APIConfig.businessReview.url}${id}`;
    return of(brandReviews)
    return this.http.get(url).pipe();
  }
}
