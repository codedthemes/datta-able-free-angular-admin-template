import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {addUserCommand, GetUsersCommand, updateUserCommand} from "./users.interface";

@Injectable()
export class UsersServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddUser(user: addUserCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/UserMangament/AddUser?culture=ar-LY`,user);
    }
    UpdateUser(user: updateUserCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/UserMangament/UpdateUser?culture=ar-LY`,user);
    }
    DeleteUser(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/UserMangament/DeleteUser?Id=${Id}&culture=ar-LY`);
    }
    GetUsers(): Observable<BaseResponse<GetUsersCommand[]>> {
        return this.http.get<BaseResponse<GetUsersCommand[]>>(`${this.url}/api/UserMangament/GetUsers?culture=ar-LY`);
    }
}