import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {PenaltiesServices} from "./Penalties.services";
import {AddPenaltiesCommand, GetPenaltiesCommand, UpdatePenaltiesCommand} from "./Penalties.interface";

@Injectable()
export class PenaltiesFacade {
private PenaltiesSubject$ = new BehaviorSubject<GetPenaltiesCommand[]>([]);
public Penalties$ = this.PenaltiesSubject$.asObservable();

constructor(
    private sharedFacade: SharedFacade,
    private penaltiesServices: PenaltiesServices
) {
}
deletePenalties(id: string): void {
    const deletePenaltiesProcess$ = this.penaltiesServices.DeletePenalties(id).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                this.sharedFacade.showMessage(MessageType.success, ' حذف مكافأة', ['تم حذف بنجاح']);
                const prev = this.PenaltiesSubject$.getValue();
                const result = prev.filter((x: any) => x.id != id);
                this.PenaltiesSubject$.next(result);
                this.PenaltiesSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(deletePenaltiesProcess$).pipe().subscribe();
}
GetPenalties(): any {
    const getPenaltiesProcess$ = this.penaltiesServices.GetPenalties(1).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.PenaltiesSubject$.next(res.content);
            } else {
                this.PenaltiesSubject$.next([]);
                this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب الجزاءات', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(getPenaltiesProcess$).pipe().subscribe();
}
AddPenalties(Penalties: any): void {
    const addPenaltiesProcess$ = this.penaltiesServices.AddPenalties(Penalties).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
                const prev = this.PenaltiesSubject$.getValue();
                this.PenaltiesSubject$.next(
                    produce(prev, (draft: AddPenaltiesCommand[]) => {
                        Penalties.id = res.content;
                        draft.unshift(Penalties);
                    }));
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(addPenaltiesProcess$).pipe().subscribe();
}
UpdatePenalties(Penalties: any): void {

    const updatePenaltiesProcess$ = this.penaltiesServices.UpdatePenalties(Penalties).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                const prev = this.PenaltiesSubject$.getValue();
                this.PenaltiesSubject$.next(
                    produce(prev, (draft: UpdatePenaltiesCommand[]) => {
                        const index = draft.findIndex(x => x.id === Penalties.id);
                        draft[index] = Penalties;
                    }));
                this.PenaltiesSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(updatePenaltiesProcess$).pipe().subscribe();
}
}