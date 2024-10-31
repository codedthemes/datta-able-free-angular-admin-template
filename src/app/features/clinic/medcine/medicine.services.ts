import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../../../config/app-config';
import { Injectable } from '@angular/core';
// import {AddBankCommand, GetBanksCommand, UpdateBankCommand} from "./banks.interface";
@Injectable()
export class EmployeeEvaluationReportsServices {
  url: string | undefined;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
    this.url = this.appConfig.defaultUrl;
  }

}
