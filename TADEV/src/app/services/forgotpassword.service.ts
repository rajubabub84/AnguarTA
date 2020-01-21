import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Forgotpassword} from '../models/forgotpassword';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import {Forgotpasswordresponse} from '../models/forgotpasswordresponse'

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http: HttpClient) { 
    
  }
   submitForgotPassword(forgotpassword:Forgotpassword):Observable<any>{
     debugger;
    var headers = new HttpHeaders()
    .set("Content-Type", "application/json");
    return this.http.post<any>(environment.BaseUrl + 'api/v1.0/user/forgetpassword', forgotpassword, { headers})
            .pipe(map(data => _.values(data)));
   }
}
