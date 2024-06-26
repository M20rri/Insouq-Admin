import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {


  constructor(private http: HttpClient) {
  }


  public request(method: string, endpoint: string, data?: object, responseType?: any, showLoader: boolean = true):Observable<any>{
    const result = this.http.request(method, `${environment.baseUrl}${endpoint}`, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
      withCredentials: true,
      headers: {
        // showLoader: `${showLoader ? 'true' : 'false'}`,

      }

    });
    return result;    
  }
}