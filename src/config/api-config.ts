import { environment } from "../environments/environment";
//ApiTagginName ==> every key represent API name which we sending it in tagging object
//subUrl ==> this key used in error interceptor to know each API mapped to which key
// error_type ==> this is used to dedecate if this request type is API or Action in error case in tagging
export const APIConfig = {
  businessProfile: {
    url: environment.api + 'v1/business/public/find-one/',
    showSpinner: false,
  },
  businessReview:{
    url: environment.api + 'v1/review/public/find-all/',
    showSpinner: false,
  }
  
};
