import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {AddBankCommand, GetBanksCommand, UpdateBankCommand} from "./banks.interface";
import {BanksServices} from "./banks.services";


@Injectable()
export class BanksFacade {

    private BanksSubject$ = new BehaviorSubject<GetBanksCommand[]>([]);
    public Banks$ = this.BanksSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private banksServices: BanksServices
    ) {
    }
    deleteBank(id: string): void {
        const deleteBankProcess$ = this.banksServices.DeleteBank(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف مصرف', ['تم حذف بنجاح']);
                    const prev = this.BanksSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.BanksSubject$.next(result);
                    this.BanksSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteBankProcess$).pipe().subscribe();
    }
    GetBanks(): any {
        const getBanksProcess$ = this.banksServices.GetBanks(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.BanksSubject$.next(res.content);
                } else {
                    this.BanksSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب مصارف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getBanksProcess$).pipe().subscribe();
    }
    AddBank(Bank: any): void {
        const addBankProcess$ = this.banksServices.AddBank(Bank).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.BanksSubject$.getValue();
                    this.BanksSubject$.next(
                        produce(prev, (draft: GetBanksCommand[]) => {
                            Bank.id = res.content;
                            draft.unshift(Bank);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addBankProcess$).pipe().subscribe();
    }
    UpdateBank(Bank: any): void {
    const updateBankProcess$ = this.banksServices.UpdateBank(Bank).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                const prev = this.BanksSubject$.getValue();
                this.BanksSubject$.next(
                    produce(prev, (draft: GetBanksCommand[]) => {
                        const index = draft.findIndex(x => x.id === Bank.id);
                        draft[index] = Bank;
                    }));
                this.BanksSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(updateBankProcess$).pipe().subscribe();
    }
}