import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {NationalitiesServices} from "./nationalities.services";
import {AddNationalityCommand, GetNationalityCommand, UpdateNationalityCommand} from "./nationalities.interface";
import {Injectable} from "@angular/core";
@Injectable()
export class NationalitiesFacade {
  public NationalitySubject$ = new BehaviorSubject<GetNationalityCommand[]>([]);
    public Nationality$ = this.NationalitySubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private nationalitiesServices: NationalitiesServices
    ) {
    }
    deleteNationality(id: string): void {
        const deleteNationalityProcess$ = this.nationalitiesServices.DeleteNationality(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف مكافأة', ['تم حذف بنجاح']);
                    const prev = this.NationalitySubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.NationalitySubject$.next(result);
                    this.NationalitySubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteNationalityProcess$).pipe().subscribe();
    }
    GetNationality(): any {
        const getNationalityProcess$ = this.nationalitiesServices.GetNationality(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.NationalitySubject$.next(res.content);
                } else {
                    this.NationalitySubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب الجنسيات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getNationalityProcess$).pipe().subscribe();
    }
    AddNationality(nationality: any): void {
        const addNationalityProcess$ = this.nationalitiesServices.AddNationality(nationality).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
                    const prev = this.NationalitySubject$.getValue();
                    this.NationalitySubject$.next(
                        produce(prev, (draft: GetNationalityCommand[]) => {
                            nationality.id = res.content;
                            draft.unshift(nationality);

                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addNationalityProcess$).pipe().subscribe();
    }
    UpdateNationality(nationality: any): void {
        const updateNationalityProcess$ = this.nationalitiesServices.UpdateNationality(nationality).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.NationalitySubject$.getValue();
                    this.NationalitySubject$.next(
                        produce(prev, (draft: GetNationalityCommand[]) => {
                            const index = draft.findIndex(x => x.id === nationality.id);
                            draft[index] = nationality;
                        }));
                    this.NationalitySubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateNationalityProcess$).pipe().subscribe();
    }
}
