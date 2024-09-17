import { ChangeDetectorRef, Injectable } from '@angular/core';
import { async, BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {ReClassificationServices} from "./reClassification.services";
import {  GetEmployeeCommand } from './reClassification.interface';


@Injectable()
export class ReClassificationFacade {

  EmployeeSubject$ = new BehaviorSubject<GetEmployeeCommand>(null);
  public Employee$ = this.EmployeeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private clinicsServices: ReClassificationServices,
    ) {
    }

  reClassification(request: any): void {
        const reClassificationProcess$ = this.clinicsServices.ReClassification(request).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت عملية إعادة تصنيف بنجاح',res.messages);
                  this.EmployeeSubject$.next(null);
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية إعادة تصنيف', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(reClassificationProcess$).pipe().subscribe();

    }

  GetEmployee(SearchType,Value): any {
    const getEmployeeProcess$ = this.clinicsServices.GetEmployee(SearchType,Value).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.EmployeeSubject$.next(res.content[0]);
          this.EmployeeSubject$.subscribe();
        } else {
          this.EmployeeSubject$.next(null);

          this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب بيانات الموظف', res.messages);
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
