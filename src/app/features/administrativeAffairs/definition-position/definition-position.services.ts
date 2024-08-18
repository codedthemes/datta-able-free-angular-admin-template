import {Injectable} from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {
  AddPositionCommand,
  GetPositionCommand,
  GetLocationsCommand,
  UpdatePositionCommand
} from './definition-position.interface';

@Injectable()
export class DefinitionPositionServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }

    AddPosition(data: AddPositionCommand): Observable<BaseResponse<string>> {
        return this.http.post<BaseResponse<string>>(`${this.url}/api/Position/AddPosition?culture=ar-LY`,data);
    }
    UpdatePosition(data: UpdatePositionCommand): Observable<BaseResponse<string>> {
      return this.http.put<BaseResponse<string>>(`${this.url}/api/Position/UpdatePosition?culture=ar-LY`,data);
    }
    DeletePosition(Id: string): Observable<BaseResponse<boolean>> {
        return this.http.delete<BaseResponse<boolean>>(`${this.url}/api/Position/DeletePosition?Id=${Id}&culture=ar-LY`);
    }
  GetPosition(PositionCode: any, JobTitleId: any): Observable<BaseResponse<GetPositionCommand[]>> {
    let params = new HttpParams().set('culture', 'ar-LY');

    if (PositionCode != '' && PositionCode != null) {
      params = params.set('PositionCode', PositionCode);
    }

    if (JobTitleId != '' && JobTitleId != null) {
      params = params.set('JobTitleId', JobTitleId);
    }

    return this.http.get<BaseResponse<GetPositionCommand[]>>(`${this.url}/api/Position/GetPosition`, { params });



    // if(PositionCode == '' && JobTitleId ==''){
    //     return this.http.get<BaseResponse<GetPositionCommand[]>>(`${this.url}/api/Position/GetPosition?culture=ar-LY`);
    //
    //   } else {
    //     return this.http.get<BaseResponse<GetPositionCommand[]>>(`${this.url}/api/Position/GetPosition?PositionCode=${PositionCode}&JobTitleId=${JobTitleId}&culture=ar-LY` );
    //   }
    }
  GetLocations(): Observable<BaseResponse<GetLocationsCommand[]>> {
    return this.http.get<BaseResponse<GetLocationsCommand[]>>(`${this.url}/api/Position/GetLocations?culture=ar-LY`);
  }
}
