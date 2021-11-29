import { environment } from "../environments/environment";
//ApiTagginName ==> every key represent API name which we sending it in tagging object
//subUrl ==> this key used in error interceptor to know each API mapped to which key
// error_type ==> this is used to dedecate if this request type is API or Action in error case in tagging
export const APIConfig = {
  content: {
    url: environment.api + "test",
    showSpinner: false,
  }
  
};
