import { HttpClient, HttpParams } from '@angular/common/http';
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {Injectable} from "@angular/core";
import {
  AddClinicCommand,
  GetClinicsCommand,
  UpdateClinicCommand
} from './clinics.interface';
import { GetEmployeeCommand } from '../employee/employee.interface';
import { GetEmployeeBonusesCommand } from '../employee-bonuses/employee-bonuses.interface';
@Injectable()
export class ClinicsServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddClinic(Clinic: AddClinicCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/Clinic/AddEmployeeForClinic?culture=ar-LY`, Clinic);
    }
    UpdateClinic(Clinic: UpdateClinicCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/Banks/UpdateBank?culture=ar-LY`, Clinic);
    }
    DeleteClinics(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Banks/DeleteBank?Id=${Id}&culture=ar-LY`);
    }
  GetEmplyeeClinics(IsActive: 1,Clinic : string): Observable<BaseResponse<GetClinicsCommand[]>> {
            // return this.http.get<BaseResponse<GetClinicsCommand[]>>(`${this.url}/api/Banks/GetAllBank?IsActive=${IsActive}&culture=ar-LY`);
    let params = new HttpParams().set('culture', 'ar-LY');

    // if (SearchType != '' && SearchType != null && Value != '' && Value != null) {
    //   params = params.set('SearchType', SearchType);
    //   params = params.set('Value', Value);
    // }
    return this.http.get<BaseResponse<GetClinicsCommand[]>>(`${this.url}/api/Employee/GetAllEmployee`, { params });


  }
  GetEmployee(SearchType: '',Value: ''): Observable<BaseResponse<GetEmployeeCommand>> {
    // return this.http.get<BaseResponse<GetEmployeeCommand>>(`${this.url}/api/Employee/GetBonusEmployee?SearchType=${SearchType}&Value=${Value}&culture=ar-LY'`);
    return this.http.get<BaseResponse<GetEmployeeCommand>>(`${this.url}/api/Employee/GetAllEmployee?SearchType=${SearchType}&Value=${Value}&culture=ar-LY'`);
  }
}
