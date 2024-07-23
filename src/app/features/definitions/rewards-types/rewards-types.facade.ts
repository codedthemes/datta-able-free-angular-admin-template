import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, shareReplay} from "rxjs";

import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {BaseResponse, MessageType, Pages, ResponseType} from "../../../shared/shared.interfaces";
import { GetRewardsCommand} from "./rewards-types.interface";
import {RewardsTypesServices} from "./rewards-types.services";
import {produce} from "immer";

@Injectable()
export class RewardsTypesFacade {

    private RewardsSubject$ = new BehaviorSubject<GetRewardsCommand[]>([]);
    public Rewards$ = this.RewardsSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private rewardsTypesServices: RewardsTypesServices
    ) {
    }
    deleteReward(id: string): void {
        const deleteRewardProcess$ = this.rewardsTypesServices.DeleteReward(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف مكافأة', ['تم حذف بنجاح']);
                    const prev = this.RewardsSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.RewardsSubject$.next(result);
                    this.RewardsSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteRewardProcess$).pipe().subscribe();
    }
    GetRewards(): any {
        const getRewardsProcess$ = this.rewardsTypesServices.GetRewards(1).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.RewardsSubject$.next(res.content);
            } else {
                this.RewardsSubject$.next([]);
                this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب مكافأت', res.messages);
            }
        }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getRewardsProcess$).pipe().subscribe();
    }
    AddReward(Rewards: any): void {
        const addRewardProcess$ = this.rewardsTypesServices.AddReward(Rewards).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.RewardsSubject$.getValue();
                    this.RewardsSubject$.next(
                        produce(prev, (draft: GetRewardsCommand[]) => {
                            Rewards.id = res.content;
                            draft.unshift(Rewards);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addRewardProcess$).pipe().subscribe();
    }
    UpdateReward(Rewards: any): void {

        const updateRewardProcess$ = this.rewardsTypesServices.UpdateReward(Rewards).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.RewardsSubject$.getValue();
                    this.RewardsSubject$.next(
                        produce(prev, (draft: GetRewardsCommand[]) => {
                            const index = draft.findIndex(x => x.id === Rewards.id);
                            draft[index] = Rewards;
                        }));
                    this.RewardsSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateRewardProcess$).pipe().subscribe();
    }
}