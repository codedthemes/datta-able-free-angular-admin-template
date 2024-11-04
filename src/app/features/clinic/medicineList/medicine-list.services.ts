import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/app-config';
// import {AddBankCommand, GetBanksCommand, UpdateBankCommand} from "./banks.interface";
@Injectable()
export class MedicineListServices {
  url: string | undefined;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
    this.url = this.appConfig.defaultUrl;
  }
}
