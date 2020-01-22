import { environment } from '../../environments/environment'
import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token } from '../models/token';
import { ILogin } from '../models/login';

@Injectable()
export class LoginService {
    private BASE_URL = environment.BaseUrl;
  debugger;
  constructor(private http: HttpClient) { }

  public userAuthentication(user: ILogin): Observable<Token> {
    debugger;
    let _url = this.BASE_URL + "api/v1.0/user/login";
    const payload = new HttpParams()
      .set('username', user.username)
      .set('password', user.password)
      .set('missioncode', environment.Missioncode)
      .set('countrycode', environment.Countrycode);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.http.post<Token>(_url, payload,httpOptions);
  }
}

  

