import {Injectable} from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {
  AddOrganizationalUnitCommand, AllOrganizationalUnitsCommand,
  UnitsCommand, UnitTypeCommand,
  UpdateOrganizationalUnitCommand
} from './organizational-unit.interface';
@Injectable()
export class OrganizationalUnitServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddOrganizationalUnit(Bank: AddOrganizationalUnitCommand): Observable<BaseResponse<AllOrganizationalUnitsCommand>> {
        return this.http.post<BaseResponse<AllOrganizationalUnitsCommand>>(`${this.url}/api/AdministrativeAffairs/AddOrganizationalUnit?culture=ar-LY`, Bank);
    }
    UpdateOrganizationalUnit(Bank: UpdateOrganizationalUnitCommand): Observable<BaseResponse<AllOrganizationalUnitsCommand>> {
        return this.http.post<BaseResponse<AllOrganizationalUnitsCommand>>(`${this.url}/api/AdministrativeAffairs/UpdateOrganizationalUnit?culture=ar-LY`, Bank);
    }
    DeleteOrganizationalUnit(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/AdministrativeAffairs/DeleteOrganizationalUnit?Id=${Id}&culture=ar-LY`);
    }
    GetUnitsByDirectManager(directManager: string | null | undefined): Observable<BaseResponse<UnitsCommand[]>> {
        return this.http.get<BaseResponse<UnitsCommand[]>>(`${this.url}/api/AdministrativeAffairs/GetUnitsByDirectManager?DirectManager=${directManager}&culture=ar-LY`);
    }
    GetAllOrganizationalUnits(IsActive: 1): Observable<BaseResponse<AllOrganizationalUnitsCommand[]>> {
        return this.http.get<BaseResponse<AllOrganizationalUnitsCommand[]>>(`${this.url}/api/AdministrativeAffairs/GetAllOrganizationalUnits?IsActive=${IsActive}&culture=ar-LY`);
    }
  GetUnitType(): Observable<BaseResponse<UnitTypeCommand[]>> {
        return this.http.get<BaseResponse<UnitTypeCommand[]>>(`${this.url}/api/AdministrativeAffairs/GetAllOrganizationStructureTypes?culture=ar-LY`);

  }

    FilterOrganizationalUnits(parentId: string, Name: string , Number: string ): Observable<BaseResponse<AllOrganizationalUnitsCommand[]>> {
      // return this.http.get<BaseResponse<AllOrganizationalUnitsCommand[]>>(`${this.url}/api/AdministrativeAffairs/FilterOrganizationalUnits?culture=ar-LY`,{params: {parentId : parentId,Name: Name , Number :Number   } });}

      let params = new HttpParams().set('culture', 'ar-LY');

      if (Name != '' && Name != null) {
        params = params.set('Name', Name);
      }

      if (Number != '' && Number != null) {
        params = params.set('costCenter', Number);
      }

      return this.http.get<BaseResponse<AllOrganizationalUnitsCommand[]>>(`${this.url}/api/AdministrativeAffairs/FilterOrganizationalUnits?culture=ar-LY`, { params });}
    GetOrganizationalUnitIdNextQuery(parentId : string | null | undefined): Observable<BaseResponse<string>> {
        return this.http.get<BaseResponse<string>>(`${this.url}/api/AdministrativeAffairs/GetOrganizationalUnitIdNextQuery?ParentId=${parentId}&culture=ar-LY`);
    }
    GetAllUnitsBranchingFromSpecificUnit(organizationalUnitNumber : string | null | undefined, departmentOnly: boolean = false): Observable<BaseResponse<UnitsCommand[]>> {
        return this.http.get<BaseResponse<UnitsCommand[]>>(`${this.url}/api/AdministrativeAffairs/FetchAllUnitsBranchingFromSpecificUnit?OrganizationalUnitNumber=${organizationalUnitNumber}&departmentOnly=${departmentOnly}&culture=ar-LY`);
    }
    GetOrganizationalUnitsByLevel(IsActive: 1 ,Level : number): Observable<BaseResponse<UnitsCommand[]>> {
        return this.http.get<BaseResponse<UnitsCommand[]>>(`${this.url}/api/AdministrativeAffairs/OrganizationalUnitsByLevel?IsActive=${IsActive}&Level=${Level}&culture=ar-LY`);
    }

}
