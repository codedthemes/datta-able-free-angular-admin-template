import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {Injectable} from "@angular/core";
import {AddEmployeeCommand, GetEmployeeCommand, UpdateEmployeeCommand} from "./employee.interface";
@Injectable()
export class EmployeeServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddEmployee(Employee: AddEmployeeCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/Employees/AddEmployee?culture=ar-LY`, Employee);
    }
    UpdateEmployee(Employee: UpdateEmployeeCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/Employees/UpdateEmployee?culture=ar-LY`, Employee);
    }
    DeleteEmployee(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Employees/DeleteEmployee?Id=${Id}&culture=ar-LY`);
    }
    GetEmployee(): Observable<BaseResponse<GetEmployeeCommand[]>> {
            return this.http.get<BaseResponse<GetEmployeeCommand[]>>(`${this.url}/api/Employee/GetEmployees?culture=ar-LY`);
    }
}