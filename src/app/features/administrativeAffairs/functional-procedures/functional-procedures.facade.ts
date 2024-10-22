import { ChangeDetectorRef, Injectable } from '@angular/core';
import { async, BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {FunctionalProceduresServices} from "./functional-procedures.services";
import {  GetEmployeeCommand } from './functional-procedures.interface';


@Injectable()
export class FunctionalProceduresFacade {

  EmployeeSubject$ = new BehaviorSubject<GetEmployeeCommand>(null);
  public Employee$ = this.EmployeeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private functionalProceduresServices: FunctionalProceduresServices,
    ) {
    }

  RehireToRetiredEmployee(request: any): void {
        const reClassificationProcess$ = this.functionalProceduresServices.RehireToRetiredEmployee(request).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تنفيذ الإجراء بنجاح',res.messages);
                  this.EmployeeSubject$.next(null);
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم يتم تنفيذ الإجراء بنجاح', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(reClassificationProcess$).pipe().subscribe();

    }
  ChangeDateOfHire(request: any): void {
        const reClassificationProcess$ = this.functionalProceduresServices.ChangeDateOfHire(request).pipe(
          tap(res => {
            if (res.type == ResponseType.Success) {
              this.sharedFacade.showMessage(MessageType.success, 'تم تنفيذ الإجراء بنجاح',res.messages);
              this.EmployeeSubject$.next(null);
            } else {
              this.sharedFacade.showMessage(MessageType.error, 'لم يتم تنفيذ الإجراء بنجاح', res.messages);
            }
          }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(reClassificationProcess$).pipe().subscribe();

    }
  SalaryAdjustment(request: any): void {
        const reClassificationProcess$ = this.functionalProceduresServices.SalaryAdjustment(request).pipe(
          tap(res => {
            if (res.type == ResponseType.Success) {
              this.sharedFacade.showMessage(MessageType.success, 'تم تنفيذ الإجراء بنجاح',res.messages);
              this.EmployeeSubject$.next(null);
            } else {
              this.sharedFacade.showMessage(MessageType.error, 'لم يتم تنفيذ الإجراء بنجاح', res.messages);
            }
          }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(reClassificationProcess$).pipe().subscribe();

    }
  ReHire(request: any): void {
        const reClassificationProcess$ = this.functionalProceduresServices.ReHire(request).pipe(
          tap(res => {
            if (res.type == ResponseType.Success) {
              this.sharedFacade.showMessage(MessageType.success, 'تم تنفيذ الإجراء بنجاح',res.messages);
              this.EmployeeSubject$.next(null);
            } else {
              this.sharedFacade.showMessage(MessageType.error, 'لم يتم تنفيذ الإجراء بنجاح', res.messages);
            }
          }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(reClassificationProcess$).pipe().subscribe();

    }

  GetEmployee(SearchType,Value): any {
    const getEmployeeProcess$ = this.functionalProceduresServices.GetEmployee(SearchType,Value).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.EmployeeSubject$.next(res.content[0]);
          this.EmployeeSubject$.subscribe();
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
  terminationOfService(request: any): void {
    const reClassificationProcess$ = this.functionalProceduresServices.terminationOfService(request).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.sharedFacade.showMessage(MessageType.success, 'تم تنفيذ الإجراء بنجاح',res.messages);
          this.EmployeeSubject$.next(null);
        } else {
          this.sharedFacade.showMessage(MessageType.error, 'لم يتم تنفيذ الإجراء بنجاح', res.messages);
        }
      }),

      shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(reClassificationProcess$).pipe().subscribe();

  }
}
