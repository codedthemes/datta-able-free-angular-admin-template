import { HttpClient, HttpParams } from '@angular/common/http';
import {AppConfig} from "../../../../config/app-config";
import {Observable} from "rxjs";
import {BaseResponse} from "../../../shared/shared.interfaces";
import {Injectable} from "@angular/core";

import { GetEmployeeCommand } from '../employee/employee.interface';
import { GetEmployeeBonusesCommand } from '../employee-bonuses/employee-bonuses.interface';
import { ReClassificationCommand } from './functional-procedures.interface';
import { Validators } from '@angular/forms';
@Injectable()
export class FunctionalProceduresServices {
    url: string | undefined;

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig) {
        this.url = this.appConfig.defaultUrl;

    }


  RehireToRetiredEmployee(request: any): Observable<BaseResponse<string>> {
    let params = new HttpParams();
    if (request.employeeId !='' && request.employeeId !=null ) {
      params = params.set('EmployeeId', request.employeeId);
    }
    if (request.Notes !='' && request.Notes !=null) {
      params = params.set('Notes', request.Notes);
    }
    if (request.HireDate !='' && request.HireDate !=null) {
      params = params.set('HireDate', request.HireDate);
    }
    if (request.effDate !='' && request.effDate !=null) {
      params = params.set('EffDate', request.effDate);
    }
    params = params.set('culture', 'ar-LY');
        return this.http.put<BaseResponse<string>>(`${this.url}/api/FunctionalProcedures/RehireToRetiredEmployee`,{},    { params: params });
    }
  ChangeDateOfHire(request: any): Observable<BaseResponse<string>> {
    let params = new HttpParams();
    if (request.employeeId !='' && request.employeeId !=null ) {
      params = params.set('EmployeeId', request.employeeId);
    }

    if (request.effDate !='' && request.effDate !=null) {
      params = params.set('EffDate', request.effDate);
    }
    if (request.HireDate !='' && request.HireDate !=null) {
      params = params.set('HireDate', request.HireDate);
    }
    if (request.Notes !='' && request.Notes !=null) {
      params = params.set('Notes', request.Notes);
    }
    params = params.set('culture', 'ar-LY');
        return this.http.put<BaseResponse<string>>(`${this.url}/api/FunctionalProcedures/ChangeDateOfHire`,{},    { params: params });
    }
  SalaryAdjustment(request: any): Observable<BaseResponse<string>> {
    let params = new HttpParams();
    if (request.employeeId !='' && request.employeeId !=null ) {
      params = params.set('EmployeeId', request.employeeId);
    }

    if (request.effDate !='' && request.effDate !=null) {
      params = params.set('EffDate', request.effDate);
    }
    if (request.basicSalary !='' && request.basicSalary !=null) {
      params = params.set('BasicSalary', request.basicSalary);
    }
    if (request.Notes !='' && request.Notes !=null) {
      params = params.set('Notes', request.Notes);
    }
    params = params.set('culture', 'ar-LY');
        return this.http.put<BaseResponse<string>>(`${this.url}/api/FunctionalProcedures/SalaryAdjustment`,{},    { params: params });
    }
  ReHire(request: any): Observable<BaseResponse<string>> {
    let params = new HttpParams();
    if (request.employeeId !='' && request.employeeId !=null ) {
      params = params.set('EmployeeId', request.employeeId);
    }

    if (request.effDate !='' && request.effDate !=null) {
      params = params.set('EffDate', request.effDate);
    }

    if (request.Notes !='' && request.Notes !=null) {
      params = params.set('Notes', request.Notes);
    }
    params = params.set('culture', 'ar-LY');
        return this.http.put<BaseResponse<string>>(`${this.url}/api/FunctionalProcedures/ReHire`,{},    { params: params });
    }
  GetEmployee(SearchType: '',Value: ''): Observable<BaseResponse<GetEmployeeCommand>> {
    return this.http.get<BaseResponse<GetEmployeeCommand>>(`${this.url}/api/Employee/GetAllEmployee?SearchType=${SearchType}&Value=${Value}&culture=ar-LY'`);
  }
  terminationOfService(request: any): Observable<BaseResponse<string>> {
    let params = new HttpParams();
    if (request.employeeId !='' && request.employeeId !=null ) {
      params = params.set('EmployeeId', request.employeeId);
    }
    if (request.procedureCode !='' && request.procedureCode !=null) {
      params = params.set('procedureCode', request.procedureCode);
    }
    if (request.effDate !='' && request.effDate !=null) {
      params = params.set('EffDate', request.effDate);
    }
    params = params.set('culture', 'ar-LY');
    return this.http.put<BaseResponse<string>>(`${this.url}/api/FunctionalProcedures/TerminationOfService`,{},    { params: params });
  }
}
