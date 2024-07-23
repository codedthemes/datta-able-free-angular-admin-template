import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {
    AddClassificationBranchCommand, GetClassificationBranchCommand,
    UpdateClassificationBranchCommand
} from "./classification-bankBranches.interface";

@Injectable()
export class ClassificationBankBranchesService{
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddClassificationBranch(Bank: AddClassificationBranchCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/BankClasscification/AddBankClasscification?culture=ar-LY`, Bank);
    }
    UpdateClassificationBranch(Bank: UpdateClassificationBranchCommand): Observable<BaseResponse<string>> {
        return this.http.put<BaseResponse<string>>(`${this.url}/api/BankClasscification/UpdateBankClasscification?culture=ar-LY`, Bank);
    }
    DeleteClassificationBranch(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/BankClasscification/DeleteBankClasscification?Id=${Id}&culture=ar-LY`);
    }
    GetClassificationBranch(IsActive: 1): Observable<BaseResponse<GetClassificationBranchCommand[]>> {
        return this.http.get<BaseResponse<GetClassificationBranchCommand[]>>(`${this.url}/api/BankClasscification/GetAllBankClassification?IsActive=${IsActive}&culture=ar-LY`);
    }
}
