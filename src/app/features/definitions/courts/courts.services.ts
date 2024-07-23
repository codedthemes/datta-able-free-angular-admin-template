import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {AddCourtsCommand, CourtsCommand} from "./courts.interface";

@Injectable()
export class CourtsServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

AddCourts(Courts: AddCourtsCommand): Observable<BaseResponse<string>> {
return this.http.post<BaseResponse<string>>(`${this.url}/api/Courts/AddCourt?culture=ar-LY`, Courts);
}
UpdateCourts(Courts: CourtsCommand): Observable<BaseResponse<string>> {
return this.http.put<BaseResponse<string>>(`${this.url}/api/Courts/UpdateCourt?culture=ar-LY`, Courts);
}
DeleteCourts(Id: string): Observable<BaseResponse<boolean>> {
return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Courts/DeleteCourt?Id=${Id}&culture=ar-LY`);
}
GetCourts(IsActive: 1): Observable<BaseResponse<CourtsCommand[]>> {
        return this.http.get<BaseResponse<CourtsCommand[]>>(`${this.url}/api/Courts/GetCourts?IsActive=${IsActive}&culture=ar-LY`);
    }
}