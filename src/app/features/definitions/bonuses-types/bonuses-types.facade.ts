import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {BonusesTypesServices} from "./bonuses-types.services";
import {AddBonusesTypeCommand, GetBonusesTypeCommand} from "./bonuses-types.interface";
@Injectable()
export class BonusesTypesFacade {

private BonusesTypeSubject$ = new BehaviorSubject<GetBonusesTypeCommand[]>([]);
public BonusesType$ = this.BonusesTypeSubject$.asObservable();

constructor(
    private sharedFacade: SharedFacade,
    private bonusesTypesServices: BonusesTypesServices
) {
}
deleteBonusesType(id: string): void {
const deleteBonusesTypeProcess$ = this.bonusesTypesServices.DeleteBonusesTypes(id).pipe(
    tap(res => {
        if (res.type == ResponseType.Success) {
            // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
            this.sharedFacade.showMessage(MessageType.success, ' حذف نوع علاوة', ['تم حذف بنجاح']);
            const prev = this.BonusesTypeSubject$.getValue();
            const result = prev.filter((x: any) => x.id != id);
            this.BonusesTypeSubject$.next(result);
            this.BonusesTypeSubject$.subscribe();
        } else {
            this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
        }
    }),
    shareReplay()
);
this.sharedFacade.showLoaderUntilCompleted(deleteBonusesTypeProcess$).pipe().subscribe();
}
GetBonusesType(): any {
const getBonusesTypeProcess$ = this.bonusesTypesServices.GetBonusesTypes(1).pipe(
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
AddBonusesType(bonusesType: any): void {
const addBonusesTypeProcess$ = this.bonusesTypesServices.AddBonusesTypes(bonusesType).pipe(
    tap(res => {
        if (res.type == ResponseType.Success) {
            this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
            const prev = this.BonusesTypeSubject$.getValue();
            this.BonusesTypeSubject$.next(
                produce(prev, (draft: GetBonusesTypeCommand[]) => {
                    bonusesType.id = res.content;
                    draft.unshift(bonusesType);
                }));
        } else {
            this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
        }
    }),

    shareReplay()
);
this.sharedFacade.showLoaderUntilCompleted(addBonusesTypeProcess$).pipe().subscribe();
}
UpdateBonusesType(bonusesType: any): void {
const updateBonusesTypeProcess$ = this.bonusesTypesServices.UpdateBonusesTypes(bonusesType).pipe(
    tap(res => {
        if (res.type == ResponseType.Success) {
            this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
            const prev = this.BonusesTypeSubject$.getValue();
            this.BonusesTypeSubject$.next(
                produce(prev, (draft: GetBonusesTypeCommand[]) => {
                    const index = draft.findIndex(x => x.id === bonusesType.id);
                    draft[index] = bonusesType;
                }));
            this.BonusesTypeSubject$.subscribe();
        } else {
            this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
        }
    }),
    shareReplay()
);
this.sharedFacade.showLoaderUntilCompleted(updateBonusesTypeProcess$).pipe().subscribe();
  }
}