import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseResponse} from "../shared/shared.interfaces";
import {
  ChangePasswordCommand,
  ForgotPasswordCommand,
  LoginRequest,
  UserAuthenticationModel,
  VerifyOtpCommand
} from "./core.interface";
import {AppConfig} from "../../config/app-config";

@Injectable()
export class CoreService {
  url: string | undefined;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig) {
    this.url = this.appConfig.defaultUrl;

  }

  login(user: LoginRequest): Observable<BaseResponse<UserAuthenticationModel>> {
    return this.http.post<BaseResponse<UserAuthenticationModel>>(`${this.url}/api/Auth/Login?culture=ar-LY`, user);
  }

  changePassword(newPassword: ChangePasswordCommand): Observable<BaseResponse<boolean>> {
    return this.http.put<BaseResponse<boolean>>(`${this.url}/api/Auth/ChangePassword?culture=ar-LY`, newPassword);
  }

  ForgotPassword(userName: ForgotPasswordCommand): Observable<BaseResponse<UserAuthenticationModel>> {
    return this.http.put<BaseResponse<UserAuthenticationModel>>(`${this.url}/api/Auth/ForgotPassword?culture=ar-LY`,userName);
  }

  VerifyOtp(otp: VerifyOtpCommand): Observable<BaseResponse<UserAuthenticationModel>> {
    return this.http.get<BaseResponse<UserAuthenticationModel>>(`${this.url}/api/Auth/VerifyOtp?Otp=${otp.Otp}&culture=ar-LY`);
  }
}
