import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {AddEvaluationsTypesCommand, EvaluationsTypesCommand} from "./evaluations-types.interface";
import {EvaluationsTypesServices} from "./evaluations-types.services";

@Injectable()
export class EvaluationsTypesFacade {

    private EvaluationsTypesSubject$ = new BehaviorSubject<EvaluationsTypesCommand[]>([]);
    public EvaluationsType$ = this.EvaluationsTypesSubject$.asObservable();
    constructor(
        private sharedFacade: SharedFacade,
        private evaluationsTypesServices: EvaluationsTypesServices
    ) {
    }
    deleteEvaluationsType(id: string): void {
        const deleteEvaluationsTypeProcess$ = this.evaluationsTypesServices.DeleteEvaluationsType(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف نوع التقييم', ['تم حذف بنجاح']);
                    const prev = this.EvaluationsTypesSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.EvaluationsTypesSubject$.next(result);
                    this.EvaluationsTypesSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteEvaluationsTypeProcess$).pipe().subscribe();
    }
    GetEvaluationsType(): any {
        const getEvaluationsTypeProcess$ = this.evaluationsTypesServices.GetEvaluationsType(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.EvaluationsTypesSubject$.next(res.content);
                } else {
                    this.EvaluationsTypesSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب أنواع التقييمات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getEvaluationsTypeProcess$).pipe().subscribe();
    }
    AddEvaluationsType(EvaluationsType: any): void {
        const addEvaluationsTypeProcess$ = this.evaluationsTypesServices.AddEvaluationsType(EvaluationsType).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.EvaluationsTypesSubject$.getValue();
                    this.EvaluationsTypesSubject$.next(
                        produce(prev, (draft: AddEvaluationsTypesCommand[]) => {
                            EvaluationsType.id = res.content;
                            draft.unshift(EvaluationsType);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addEvaluationsTypeProcess$).pipe().subscribe();
    }
    UpdateEvaluationsType(EvaluationsType: any): void {

        const updateEvaluationsTypeProcess$ = this.evaluationsTypesServices.UpdateEvaluationsType(EvaluationsType).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.EvaluationsTypesSubject$.getValue();
                    this.EvaluationsTypesSubject$.next(
                        produce(prev, (draft: EvaluationsTypesCommand[]) => {
                            const index = draft.findIndex(x => x.id === EvaluationsType.id);
                            draft[index] = EvaluationsType;
                        }));
                    this.EvaluationsTypesSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateEvaluationsTypeProcess$).pipe().subscribe();
    }
}