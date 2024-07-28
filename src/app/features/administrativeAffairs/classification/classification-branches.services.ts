import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {
  AddClassificationBranchCommand,
  ClassificationBranchCommand,
  JobClassificationCommand
} from './classification-branches.interface';


@Injectable()
export class ClassificationBranchesService{
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddClassificationBranch(Bank: AddClassificationBranchCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/AdministrativeAffairs/AddClassification?culture=ar-LY`, Bank);
    }
    UpdateClassificationBranch(Bank: ClassificationBranchCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/AdministrativeAffairs/UpdateClassification?culture=ar-LY`, Bank);
    }
    DeleteClassificationBranch(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/AdministrativeAffairs/DeleteClassification?Id=${Id}&culture=ar-LY`);
    }
    GetClassificationBranch(IsActive: 1): Observable<BaseResponse<ClassificationBranchCommand[]>> {
        return this.http.get<BaseResponse<ClassificationBranchCommand[]>>(`${this.url}/api/AdministrativeAffairs/GetAllClassifications?IsActive=${IsActive}&culture=ar-LY`);
    }
  GetJobClassification(): Observable<BaseResponse<JobClassificationCommand[]>> {
        return this.http.get<BaseResponse<JobClassificationCommand[]>>(`${this.url}/api/JobTitle/GetJobClassification?culture=ar-LY`);
    }
}
