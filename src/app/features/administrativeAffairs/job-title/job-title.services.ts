import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import { AddJobTitleCommand, functionalFamily, GetJobTitleCommand, UpdateJobTitleCommand } from './job-title.interface';

@Injectable()
export class JobTitleServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddJobTitle(data: GetJobTitleCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/JobTitle/AddJobTitle?culture=ar-LY`,data);
    }
    UpdateJobTitle(data: UpdateJobTitleCommand): Observable<BaseResponse<string>> {
      return this.http.put<BaseResponse<string>>(`${this.url}/api/JobTitle/UpdateJobTitle?culture=ar-LY`,data);

    }
    DeleteJobTitle(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/JobTitle/DeleteJobTitle?Id=${Id}&culture=ar-LY`);
    }
    GetJobTitle(): Observable<BaseResponse<GetJobTitleCommand[]>> {
      return this.http.get<BaseResponse<GetJobTitleCommand[]>>(`${this.url}/api/JobTitle/GetJobTitle?culture=ar-LY`);
    }
  GetFunctionalFamily(): Observable<BaseResponse<functionalFamily[]>> {
      return this.http.get<BaseResponse<functionalFamily[]>>(`${this.url}/GetAllFunctionalFamilies?culture=ar-LY`);
    }
  GetJobTitleId(Id): Observable<BaseResponse<GetJobTitleCommand[]>> {
    return this.http.get<BaseResponse<GetJobTitleCommand[]>>(`${this.url}/api/JobTitle/GetJobTitle?Name=${Id}&culture=ar-LY`);
  }
}
