import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {Injectable} from "@angular/core";
import {
    getAllGroup,
    getGroupsMenuCommand,
    addGroupCommand,
    updateGroupCommand,
    AddPermissionCommand,
    permissionCommand, PermissionsDictionary
} from "./permission.interface";
@Injectable()
export class PermissionServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddPermission(permission: AddPermissionCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/Groups/AddPermission?culture=ar-LY`, permission);
    }
    AddGroup(group: addGroupCommand): Observable<BaseResponse<getAllGroup>> {
        return this.http.post<BaseResponse<getAllGroup>>(`${this.url}/api/Groups/AddGroup?culture=ar-LY`, group);
    }
    UpdateGroup(group: updateGroupCommand): Observable<BaseResponse<getAllGroup>> {
        return this.http.put<BaseResponse<getAllGroup>>(`${this.url}/api/Groups/UpdateGroup?culture=ar-LY`, group);
    }
    DeleteGroup(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Groups/DeleteGroup?Id=${Id}&culture=ar-LY`);
    }
    GetGroupsMenu(IsActive: 1): Observable<BaseResponse<getGroupsMenuCommand[]>> {
            return this.http.get<BaseResponse<getGroupsMenuCommand[]>>(`${this.url}/api/Groups/GetGroupsMenu?IsActive=${IsActive}&culture=ar-LY`);
    }
    GetAllGroup(): Observable<BaseResponse<getAllGroup[]>> {
            return this.http.get<BaseResponse<getAllGroup[]>>(`${this.url}/api/Groups/GetAllGroup?culture=ar-LY`);
    }
    GetAllPermission(): Observable<BaseResponse<permissionCommand>> {
            return this.http.get<BaseResponse<permissionCommand>>(`${this.url}/api/Groups/GetAllPermisstion?culture=ar-LY`);
    }
    GetGroupDataById(Id: string): Observable<BaseResponse<getAllGroup[]>> {
            return this.http.get<BaseResponse<getAllGroup[]>>(`${this.url}/api/Groups/GetGroupDataById?Id=${Id}&culture=ar-LY`);
    }
}