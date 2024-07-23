import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {BankBranchesServices} from "./bank-branches.services";
import {AddBranchCommand, GetBranchCommand, UpdateBranchCommand} from "./bank-branches.interface";

    @Injectable()
    export class BankBranchesFacade {

    private BankBranchesSubject$ = new BehaviorSubject<GetBranchCommand[]>([]);
    public BankBranches$ = this.BankBranchesSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private bankBranchesServices: BankBranchesServices
    ) {
    }
    deleteBranch(id: string): void {
        const deleteBankProcess$ = this.bankBranchesServices.DeleteBranch(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف فرع المصرف', ['تم حذف بنجاح']);
                    const prev = this.BankBranchesSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.BankBranchesSubject$.next(result);
                    this.BankBranchesSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteBankProcess$).pipe().subscribe();
    }
    GetBranch( BankId: string | null | undefined, BankClasscificationId: string | null | undefined): any {
        const getBankBranchesProcess$ = this.bankBranchesServices.GetBranch(1, BankId, BankClasscificationId).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.BankBranchesSubject$.next(res.content);
                } else {
                    this.BankBranchesSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب فروع', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getBankBranchesProcess$).pipe().subscribe();
    }
    AddBranch(Branch: any): void {
        const addBankProcess$ = this.bankBranchesServices.AddBranch(Branch).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.BankBranchesSubject$.getValue();
                    this.BankBranchesSubject$.next(
                        produce(prev, (draft: GetBranchCommand[]) => {
                            Branch.id = res.content;
                            draft.unshift(Branch);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addBankProcess$).pipe().subscribe();
    }
    UpdateBranch(Branch: any): void {
        const updateBankProcess$ = this.bankBranchesServices.UpdateBranch(Branch).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.BankBranchesSubject$.getValue();
                    this.BankBranchesSubject$.next(
                        produce(prev, (draft: GetBranchCommand[]) => {
                            const index = draft.findIndex(x => x.id === Branch.id);
                            draft[index] = Branch;
                        }));
                    this.BankBranchesSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateBankProcess$).pipe().subscribe();
    }
}
