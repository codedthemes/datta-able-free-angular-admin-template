import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../../config/app-config';
import { Injectable } from '@angular/core';
// import {AddBankCommand, GetBanksCommand, UpdateBankCommand} from "./banks.interface";
@Injectable()
export class EmployeeEvaluationManagementServices {
  url: string | undefined;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
    this.url = this.appConfig.defaultUrl;
  }

  AddBank(Bank: any): any {
    // AddBank(Bank: any): Observable<BaseResponse<string>> {
    // return this.http.post<BaseResponse<string>>(`${this.url}/api/Banks/AddBank?culture=ar-LY`, Bank);
  }
  UpdateBank(Bank: any): any {
    // UpdateBank(Bank: any): Observable<BaseResponse<string>> {
    // return this.http.put<BaseResponse<string>>(`${this.url}/api/Banks/UpdateBank?culture=ar-LY`, Bank);
  }
  DeleteBank(Id: string): any {
    // return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Banks/DeleteBank?Id=${Id}&culture=ar-LY`);
  }
  GetBanks(IsActive: 1): any {
    // return this.http.get<BaseResponse<any[]>>(`${this.url}/api/Banks/GetAllBank?IsActive=${IsActive}&culture=ar-LY`);
  }
}
