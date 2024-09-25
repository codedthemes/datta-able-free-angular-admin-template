import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {EmployeeBonusesServices} from "./employee-bonuses.services";
import {
  BonusInfoDataModel,
  GetEmployeeBonusesCommand,
} from './employee-bonuses.interface';
import { GetBonusesTypeCommand } from '../../definitions/bonuses-types/bonuses-types.interface';

@Injectable()
export class EmployeeBonusesFacade {
public EmployeeBonusesSubject$ = new BehaviorSubject<GetEmployeeBonusesCommand>(null);
public EmployeeBonuses$ = this.EmployeeBonusesSubject$.asObservable();


  private BonusesTypeSubject$ = new BehaviorSubject<GetBonusesTypeCommand[]>([]);
  public BonusesType$ = this.BonusesTypeSubject$.asObservable();

constructor(
    private sharedFacade: SharedFacade,
    private employeeBonusesServices: EmployeeBonusesServices
) {
}
  cancelEmployeeBonuses(bounse: any): void {
    const deleteEmployeeBonusesProcess$ = this.employeeBonusesServices.CancelEmployeeBonuses(bounse).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تم الغاء ', ['تم الغاء بنجاح']);
              this.EmployeeBonusesSubject$.next(null);

           } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الغاء', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(deleteEmployeeBonusesProcess$).pipe().subscribe();
}
GetEmployeeBonuses(SearchType,Value): any {
  this.EmployeeBonusesSubject$.next(null);
  this.EmployeeBonusesSubject$.subscribe();
    const getEmployeeBonusesProcess$ = this.employeeBonusesServices.GetEmployeeBonuses(SearchType,Value).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
              this.EmployeeBonusesSubject$.next(res.content);
            } else {
              this.EmployeeBonusesSubject$.next(null);
                this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب علاوات المستخدمين', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(getEmployeeBonusesProcess$).pipe().subscribe();
}
AddEmployeeBonuses(EmployeeBonuses: any): void {
    const addEmployeeBonusesProcess$ = this.employeeBonusesServices.AddEmployeeBonuses(EmployeeBonuses).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
                // const prev = this.EmployeeBonusesSubject$.getValue();
                // this.EmployeeBonusesSubject$.next(
                //     produce(prev, (draft: GetEmployeeBonusesCommand[]) => {
                //         EmployeeBonuses.id = res.content;
                //         draft.unshift(EmployeeBonuses);
                //     }));
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(addEmployeeBonusesProcess$).pipe().subscribe();
}
  GetBonusesType(): any {
    const getBonusesTypeProcess$ = this.employeeBonusesServices.GetBonusesTypes(1).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.BonusesTypeSubject$.next(res.content);
        } else {
          this.BonusesTypeSubject$.next([]);
          this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب العلاوات', res.messages);
        }
      }),
      shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(getBonusesTypeProcess$).pipe().subscribe();
  }
  resetEmployeeBonuses() {// Emit an empty array or any default value
    this.EmployeeBonusesSubject$.next(null); // Emit an empty array or any default value
    this.EmployeeBonusesSubject$.subscribe(null); // Emit an empty array or any default value
  }
}
