import { ChangeDetectorRef, Injectable } from '@angular/core';
import { async, BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {DemotionServices} from "./demotion.services";
import {  GetEmployeeCommand } from './demotion.interface';


@Injectable()
export class DemotionFacade {

  EmployeeSubject$ = new BehaviorSubject<GetEmployeeCommand>(null);
  public Employee$ = this.EmployeeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private demotionServices: DemotionServices,
    ) {
    }

  reClassification(request: any): void {
        const reClassificationProcess$ = this.demotionServices.ReClassification(request).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت عملية تخفيض الدرجة بنجاح',res.messages);
                  this.EmployeeSubject$.next(null);
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تخفيض الدرجة ', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(reClassificationProcess$).pipe().subscribe();

    }

  GetEmployee(SearchType,Value): any {
    const getEmployeeProcess$ = this.demotionServices.GetEmployee(SearchType,Value).pipe(
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

}
