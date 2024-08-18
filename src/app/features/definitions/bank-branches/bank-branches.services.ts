import {Injectable} from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {AddBranchCommand, GetBranchCommand, UpdateBranchCommand} from "./bank-branches.interface";
import { GetPositionCommand } from '../../administrativeAffairs/definition-position/definition-position.interface';

@Injectable()
export class BankBranchesServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddBranch(Bank: AddBranchCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/Branches/AddBranch?culture=ar-LY`, Bank);
    }
    UpdateBranch(Bank: UpdateBranchCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/Branches/UpdateBranch?culture=ar-LY`, Bank);
    }
    DeleteBranch(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Branches/DeleteBranch?Id=${Id}&culture=ar-LY`);
    }
    GetBranch(IsActive: 1, BankName: string | null | undefined, BankClassificationName: string | null | undefined): Observable<BaseResponse<GetBranchCommand[]>> {
        // return this.http.get<BaseResponse<GetBranchCommand[]>>(`${this.url}/api/Branches/GetBranchs?BankName=${BankName}&BankClasscificationName=${BankClassificationName}&IsActive=${IsActive}&culture=ar-LY`);
      let params = new HttpParams();
      if (BankName != '' && BankName != null) {
        params = params.set('BankId', BankName);
      }

      if (BankClassificationName != '' && BankClassificationName != null) {
        params = params.set('BankClasscificationId', BankClassificationName);
      }
      params = params.set('IsActive', IsActive);
       params = params.set('culture', 'ar-LY');

      return this.http.get<BaseResponse<GetBranchCommand[]>>(`${this.url}/api/Branches/GetBranchs`, { params });


    }
}
