import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {ClassificationBranchCommand} from "./classification-branches.interface";
import {ClassificationBranchesService} from "./classification-branches.services";

@Injectable()
export class ClassificationBranchesFacade {

    public ClassificationSubject$ = new BehaviorSubject<ClassificationBranchCommand[]>([]);
    public Classification$ = this.ClassificationSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private classificationBranchesService: ClassificationBranchesService
    ) {
    }
    deleteClassification(id: string): void {
        const deleteClassificationProcess$ = this.classificationBranchesService.DeleteClassificationBranch(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف تصنيف الفروع', ['تم حذف بنجاح']);
                    const prev = this.ClassificationSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.ClassificationSubject$.next(result);
                    this.ClassificationSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteClassificationProcess$).pipe().subscribe();
    }
    GetClassification(): any {
        const getClassificationProcess$ = this.classificationBranchesService.GetClassificationBranch(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.ClassificationSubject$.next(res.content);
                } else {
                    this.ClassificationSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب تصنيفات الفروع', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getClassificationProcess$).pipe().subscribe();
    }
    AddClassification(Classification: any): void {
        const addClassificationProcess$ = this.classificationBranchesService.AddClassificationBranch(Classification).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.ClassificationSubject$.getValue();
                    this.ClassificationSubject$.next(
                        produce(prev, (draft: ClassificationBranchCommand[]) => {
                            Classification.id = res.content;
                            draft.unshift(Classification);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addClassificationProcess$).pipe().subscribe();
    }
    UpdateClassification(Classification: any): void {

        const updateClassificationProcess$ = this.classificationBranchesService.UpdateClassificationBranch(Classification).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.ClassificationSubject$.getValue();
                    this.ClassificationSubject$.next(
                        produce(prev, (draft: ClassificationBranchCommand[]) => {
                            const index = draft.findIndex(x => x.id === Classification.id);
                            draft[index] = Classification;
                        }));
                    this.ClassificationSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateClassificationProcess$).pipe().subscribe();
    }


}