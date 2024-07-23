import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {AddEvaluationsTypesCommand, EvaluationsTypesCommand} from "./evaluations-types.interface";

@Injectable()
export class EvaluationsTypesServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddEvaluationsType(EvaluationsType: AddEvaluationsTypesCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/EvaluationsTypes/AddEvaluationType?culture=ar-LY`, EvaluationsType);
    }
    UpdateEvaluationsType(EvaluationsType: EvaluationsTypesCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/EvaluationsTypes/UpdateEvaluationType?culture=ar-LY`, EvaluationsType);
    }
    DeleteEvaluationsType(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/EvaluationsTypes/DeleteEvaluationType?Id=${Id}&culture=ar-LY`);
    }
    GetEvaluationsType(IsActive: 1): Observable<BaseResponse<EvaluationsTypesCommand[]>> {
        return this.http.get<BaseResponse<EvaluationsTypesCommand[]>>(`${this.url}/api/EvaluationsTypes/GetEvaluationsTypes?IsActive=${IsActive}&culture=ar-LY`);
    }
}