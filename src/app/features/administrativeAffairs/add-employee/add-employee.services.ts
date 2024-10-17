import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {  GetEmployeeCommand } from './add-employee.interface';
import { GetLocationsCommand } from '../definition-position/definition-position.interface';

@Injectable()
export class AddEmployeeServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

  AddEmployee(data: GetEmployeeCommand): Observable<BaseResponse<string>> {
    // return this.http.post<BaseResponse<string>>(`${this.url}/api/Employee/AddEmployee?culture=ar-LY`, data);
    const formData: FormData = new FormData();

    // Assuming AddEmployeeCommand has properties like Name and Age
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    return this.http.post<BaseResponse<string>>(`${this.url}/api/Employee/AddEmployee?culture=ar-LY`, formData);

  }
  GetOut(): Observable<BaseResponse<string>> {
    return this.http.get<BaseResponse<string>>(`${this.url}/api/Employee/GetEmployeeCodeAuto?culture=ar-LY`);
  }
}
