import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {AddBonusesTypeCommand, GetBonusesTypeCommand} from "./bonuses-types.interface";
import {Injectable} from "@angular/core";
@Injectable()
export class BonusesTypesServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddBonusesTypes(documentType: AddBonusesTypeCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/BonusTypes/AddBonusType?culture=ar-LY`, documentType);
    }
    UpdateBonusesTypes(documentType: AddBonusesTypeCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/BonusTypes/UpdateBonusType?culture=ar-LY`, documentType);
    }
    DeleteBonusesTypes(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/BonusTypes/DeleteBonusType?Id=${Id}&culture=ar-LY`);
    }
    GetBonusesTypes(IsActive: 1): Observable<BaseResponse<GetBonusesTypeCommand[]>> {return this.http.get<BaseResponse<GetBonusesTypeCommand[]>>(`${this.url}/api/BonusTypes/GetBonusTypes?IsActive=${IsActive}&culture=ar-LY`);}
}