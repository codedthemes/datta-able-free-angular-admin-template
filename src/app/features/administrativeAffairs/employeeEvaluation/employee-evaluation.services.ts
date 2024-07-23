import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {
    AddEmployeeEvaluationCommand,
    GetEmployeeEvaluationCommand,
    UpdateEmployeeEvaluationCommand
} from "./employee-evaluation.interface";

@Injectable()
export class EmployeeEvaluationServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddEmployeeEvaluation(data: AddEmployeeEvaluationCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/EmployeeEvaluation/AddEmployeeEvaluation?EmployeeId=${data.employeeId}&Year=${data.year}&EvaluationId=${data.evaluationId}&culture=ar-LY`, null);
    }
    UpdateEmployeeEvaluation(data: UpdateEmployeeEvaluationCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/EmployeeEvaluation/UpdateEmployeeEvaluation?Id=${data.id}&EmployeeId=${data.employeeId}&Year=${data.year}&EvaluationId=${data.evaluationId}&culture=ar-LY`, null);
    }
    DeleteEmployeeEvaluation(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/EmployeeEvaluation/DeleteEmployeeEvaluation?Id=${Id}&culture=ar-LY`);
    }
    GetEmployeeEvaluation(employeeId : string): Observable<BaseResponse<GetEmployeeEvaluationCommand[]>> {
        if (employeeId != '' && employeeId != null) {
            return this.http.get<BaseResponse<GetEmployeeEvaluationCommand[]>>(`${this.url}/api/EmployeeEvaluation/GetEmployeeEvaluations?EmployeeId=${employeeId}&culture=ar-LY`);

        } else {
            return this.http.get<BaseResponse<GetEmployeeEvaluationCommand[]>>(`${this.url}/api/EmployeeEvaluation/GetEmployeeEvaluations?culture=ar-LY`);

        }
    }
}