import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {BonusesTypesServices} from "../bonuses-types/bonuses-types.services";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {VacationsTypesServices} from "./vacations-types.services";
import {GetVacationsTypeCommand} from "./vacations-types.interface";

    @Injectable()
    export class VacationsTypesFacade {

    private VacationsTypeSubject$ = new BehaviorSubject<GetVacationsTypeCommand[]>([]);
    public VacationsType$ = this.VacationsTypeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private vacationsTypesServices: VacationsTypesServices
    ) {
    }
    deleteVacationsType(id: string): void {
        const deleteVacationsTypeProcess$ = this.vacationsTypesServices.DeleteVacationsTypes(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف نوع إجازة', ['تم حذف بنجاح']);
                    const prev = this.VacationsTypeSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.VacationsTypeSubject$.next(result);
                    this.VacationsTypeSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteVacationsTypeProcess$).pipe().subscribe();
    }
    GetVacationsType(): any {
        const getVacationsTypeProcess$ = this.vacationsTypesServices.GetVacationsTypes(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.VacationsTypeSubject$.next(res.content);
                } else {
                    this.VacationsTypeSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب الإجازات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getVacationsTypeProcess$).pipe().subscribe();
    }
    AddVacationsType(vacationsType: any): void {
        const addVacationsTypeProcess$ = this.vacationsTypesServices.AddVacationsTypes(vacationsType).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
                    const prev = this.VacationsTypeSubject$.getValue();
                    this.VacationsTypeSubject$.next(
                        produce(prev, (draft: GetVacationsTypeCommand[]) => {
                            vacationsType.id = res.content;
                            draft.unshift(vacationsType);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addVacationsTypeProcess$).pipe().subscribe();
    }
    UpdateVacationsType(vacationsType: any): void {
        const updateVacationsTypeProcess$ = this.vacationsTypesServices.UpdateVacationsTypes(vacationsType).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.VacationsTypeSubject$.getValue();
                    this.VacationsTypeSubject$.next(
                        produce(prev, (draft: GetVacationsTypeCommand[]) => {
                            const index = draft.findIndex(x => x.id === vacationsType.id);
                            draft[index] = vacationsType;
                        }));
                    this.VacationsTypeSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateVacationsTypeProcess$).pipe().subscribe();
    }
}