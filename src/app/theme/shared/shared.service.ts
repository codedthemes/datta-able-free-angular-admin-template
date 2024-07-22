import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseResponse} from "./shared.interfaces";
import { AppConfig } from '../../../config/app-config';

@Injectable()
export class SharedService {
  url: string | undefined;

  constructor(
    private http: HttpClient,
    // private appConfig: AppConfig
  ) {
    // this.url = this.appConfig.defaultUrl;

  }

  uploadFile(file: File): Observable<BaseResponse<string>> {
    const fd = new FormData();
    fd.append('FormFile', file);
    fd.append('FileName', file.name);
    return this.http.post<BaseResponse<string>>(`${this.url}/api/Upload?culture=ar-LY`, fd);
  }

}
