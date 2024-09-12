import { HttpClient, HttpParams } from '@angular/common/http';
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {Injectable} from "@angular/core";
import {GetEmployeeCommand, UpdateEmployeeCommand} from "./employee.interface";
import { AllOrganizationalUnitsCommand } from '../organizational-unit/organizational-unit.interface';
@Injectable()
export class EmployeeServices {
  url: string | undefined;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig) {
    this.url = this.appConfig.defaultUrl;

  }

  UpdateEmployee(Employee: UpdateEmployeeCommand): Observable<BaseResponse<string>> {
    return this.http.put<BaseResponse<string>>(`${this.url}/api/Employee/UpdateEmployee?culture=ar-LY`, Employee);
  }

  DeleteEmployee(Id: string): Observable<BaseResponse<boolean>> {
    return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Employee/DeleteEmployee?Id=${Id}&culture=ar-LY`);
  }

   GetEmployeePage(SearchType, Value): Observable<BaseResponse<GetEmployeeCommand[]>> {
    let params = new HttpParams().set('culture', 'ar-LY');

    if (SearchType != '' && SearchType != null && Value != '' && Value != null) {
      params = params.set('SearchType', SearchType);
      params = params.set('Value', Value);
    }
    return this.http.get<BaseResponse<GetEmployeeCommand[]>>(`${this.url}/api/Employee/GetAllEmployee?culture=ar-LY`, { params });
  }

  GetEmployee(): Observable<BaseResponse<GetEmployeeCommand[]>> {

    return this.http.get<BaseResponse<GetEmployeeCommand[]>>(`${this.url}/api/Employee/GetEmployees?culture=ar-LY`);
  }
}
