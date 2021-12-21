export class BusinessProfile {
    id?:any;
    name?:string;
    description?:string;
    track?:string;
    businessType?:string;
    link?:string;
    coverImage?:string;
    logoImage?:string;
    instagramLink?:string;
    businessImages?:string[];
    socialLinks?:any[];
    businessCategories?:any[];
}

export class Reviews {
    id?:any;
    name?:string;
    comment?:string;
    rating = 4.5;
}