import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {AddJobTitleCommand, GetJobTitleCommand, UpdateJobTitleCommand} from "./job-title.interface";

@Injectable()
export class JobTitleServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddJobTitle(data: AddJobTitleCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/JobTitle/AddJobTitle?AuthorizedToAccredit=${data.authorizedToAccredit}&JobClassificationId=${data.jobClassificationId}&OrganizationStructureId=${data.organizationStructureId}&culture=ar-LY`,{name: data.name});
    }
    UpdateJobTitle(data: UpdateJobTitleCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/JobTitle/UpdateJobTitle?Id=${data.id}&AuthorizedToAccredit=${data.authorizedToAccredit}&JobClassificationId=${data.jobClassificationId}&OrganizationStructureId=${data.organizationStructureId}&culture=ar-LY`, {name: data.name});
    }
    DeleteJobTitle(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/JobTitle/DeleteJobTitle?Id=${Id}&culture=ar-LY`);
    }
    GetJobTitle(data : any): Observable<BaseResponse<GetJobTitleCommand[]>> {
        return this.http.post<BaseResponse<GetJobTitleCommand[]>>(`${this.url}/api/JobTitle/GetJobTitle?culture=ar-LY`, data);
    }
}