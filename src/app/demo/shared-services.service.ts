import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthenticationModel } from './core.interface';
import { BaseResponse } from '../theme/shared/shared.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private http: HttpClient) { }

    login(user: any): Observable<BaseResponse<UserAuthenticationModel>> {
      return this.http.post<BaseResponse<UserAuthenticationModel>>(`/LoginUser/AuthUser?culture=ar-LY`, user);
  }
}
