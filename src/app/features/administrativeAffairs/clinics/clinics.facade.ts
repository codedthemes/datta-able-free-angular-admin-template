import { ChangeDetectorRef, Injectable } from '@angular/core';
import { async, BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {ClinicsServices} from "./clinics.services";
import { GetClinicsCommand, GetEmployeeCommand } from './clinics.interface';


@Injectable()
export class ClinicsFacade {

    ClinicsSubject$ = new BehaviorSubject<GetClinicsCommand[]>([]);
    public Clinics$ = this.ClinicsSubject$.asObservable();

  EmployeeSubject$ = new BehaviorSubject<GetEmployeeCommand>(null);
  public Employee$ = this.EmployeeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private clinicsServices: ClinicsServices,
    ) {
    }
  GetEmplyeeClinics(Clinic: string): any {
        const getClinicsProcess$ = this.clinicsServices.GetEmplyeeClinics(1,Clinic).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.ClinicsSubject$.next(res.content);
                } else {
                    this.ClinicsSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getClinicsProcess$).pipe().subscribe();
    }
    AddClinic(Clinic: any): void {
        const addClinicProcess$ = this.clinicsServices.AddClinic(Clinic).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                  this.EmployeeSubject$.next(null);
                } else {
                  this.EmployeeSubject$.next(null);

                  this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addClinicProcess$).pipe().subscribe();

    }

  GetEmployee(SearchType,Value): any {
    const getEmployeeProcess$ = this.clinicsServices.GetEmployee(SearchType,Value).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.EmployeeSubject$.next(res.content[0]);
        } else {
          this.EmployeeSubject$.next(null);

          this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب بيانات المستخدم', res.messages);
        }
      }),
      shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(getEmployeeProcess$).pipe().subscribe();
    return getEmployeeProcess$.pipe(
      map(res => res.type === ResponseType.Success ? res.content[0] : null)
    );
  }

}
