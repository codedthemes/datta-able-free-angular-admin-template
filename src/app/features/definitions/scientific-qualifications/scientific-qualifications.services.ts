import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {
    AddScientificQualificationsCommand,
    ScientificQualificationsCommand
} from "./scientific-qualifications.interface";

    @Injectable()
    export class ScientificQualificationsServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddScientificQualifications(ScientificQualifications: AddScientificQualificationsCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/ScientificQualifications/AddScientificQualifications?culture=ar-LY`, ScientificQualifications);
    }
    UpdateScientificQualifications(ScientificQualifications: ScientificQualificationsCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/ScientificQualifications/UpdateScientificQualifications?culture=ar-LY`, ScientificQualifications);
    }
    DeleteScientificQualifications(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/ScientificQualifications/DeleteScientificQualifications?Id=${Id}&culture=ar-LY`);
    }
    GetScientificQualifications(IsActive: 1): Observable<BaseResponse<ScientificQualificationsCommand[]>> {
        return this.http.get<BaseResponse<ScientificQualificationsCommand[]>>(`${this.url}/api/ScientificQualifications/GetScientificQualifications?IsActive=${IsActive}&culture=ar-LY`);
    }
}