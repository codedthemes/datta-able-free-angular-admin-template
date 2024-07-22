import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {Injectable} from "@angular/core";
import {AddBankCommand, GetBanksCommand, UpdateBankCommand} from "./banks.interface";
@Injectable()
export class BanksServices{
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddBank(Bank: AddBankCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/Banks/AddBank?culture=ar-LY`, Bank);
    }
    UpdateBank(Bank: UpdateBankCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/Banks/UpdateBank?culture=ar-LY`, Bank);
    }
    DeleteBank(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Banks/DeleteBank?Id=${Id}&culture=ar-LY`);
    }
    GetBanks(IsActive: 1): Observable<BaseResponse<GetBanksCommand[]>> {
            return this.http.get<BaseResponse<GetBanksCommand[]>>(`${this.url}/api/Banks/GetAllBank?IsActive=${IsActive}&culture=ar-LY`);
    }
}
