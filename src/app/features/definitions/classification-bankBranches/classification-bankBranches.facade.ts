import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {GetClassificationBranchCommand} from "./classification-bankBranches.interface";
import {ClassificationBankBranchesService} from "./classification-bankBranches.services";
import { GetBanksCommand } from '../bank/banks.interface';

@Injectable()
export class ClassificationBankBranchesFacade {

    public ClassificationBranchSubject$ = new BehaviorSubject<GetClassificationBranchCommand[]>([]);
    public ClassificationBranch$ = this.ClassificationBranchSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private classificationBankBranchesService: ClassificationBankBranchesService
    ) {
    }
    deleteClassificationBranch(id: string): void {
        const deleteClassificationBranchProcess$ = this.classificationBankBranchesService.DeleteClassificationBranch(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف تصنيف فرع المصرف', ['تم حذف بنجاح']);
                    const prev = this.ClassificationBranchSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.ClassificationBranchSubject$.next(result);
                    this.ClassificationBranchSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteClassificationBranchProcess$).pipe().subscribe();
    }
    GetClassificationBranch(): any {
        const getClassificationBranchProcess$ = this.classificationBankBranchesService.GetClassificationBranch(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.ClassificationBranchSubject$.next(res.content);
                } else {
                    this.ClassificationBranchSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب تصنيفات فروع المصارف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getClassificationBranchProcess$).pipe().subscribe();
    }
    AddClassificationBranch(ClassificationBranch: any): void {
        const addClassificationBranchProcess$ = this.classificationBankBranchesService.AddClassificationBranch(ClassificationBranch).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.ClassificationBranchSubject$.getValue();
                    this.ClassificationBranchSubject$.next(
                        produce(prev, (draft: GetClassificationBranchCommand[]) => {
                            ClassificationBranch.id = res.content;
                            draft.unshift(ClassificationBranch);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addClassificationBranchProcess$).pipe().subscribe();
    }
    UpdateClassificationBranch(ClassificationBranch: any): void {

        const updateClassificationBranchProcess$ = this.classificationBankBranchesService.UpdateClassificationBranch(ClassificationBranch).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.ClassificationBranchSubject$.getValue();
                    this.ClassificationBranchSubject$.next(
                        produce(prev, (draft: GetBanksCommand[]) => {
                            const index = draft.findIndex(x => x.id === ClassificationBranch.id);
                            draft[index] = ClassificationBranch;
                        }));
                    this.ClassificationBranchSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateClassificationBranchProcess$).pipe().subscribe();
    }


}
