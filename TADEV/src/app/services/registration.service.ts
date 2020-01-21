import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as _ from 'lodash';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Register} from '../models/register';



@Injectable({
  providedIn: 'root'
})
  export class RegistrationService {
  
    private apiURL: string = environment.BaseUrl;
  
    constructor(private http: HttpClient) { }

    RegistrationApplicant(register: Register): Observable<any> {
        debugger;
        var headers = new HttpHeaders()
          .set("Content-Type", "application/json");
        //   .set("Access-Control-Allow-Origin","*");
    
        return this.http.post<any>(this.apiURL + 'api/v1.0/user/registration', register, { headers})
            .pipe(map(data => _.values(data)));
        
      }
   
  }
