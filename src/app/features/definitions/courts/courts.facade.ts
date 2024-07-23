import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {AddCourtsCommand, CourtsCommand} from "./courts.interface";
import {CourtsServices} from "./courts.services";

@Injectable()
export class CourtsFacade {
private CourtsSubject$ = new BehaviorSubject<CourtsCommand[]>([]);
public Courts$ = this.CourtsSubject$.asObservable();

constructor(
    private sharedFacade: SharedFacade,
    private courtsService: CourtsServices
) {
}

deleteCourts(id: string): void {
    const deleteCourtsProcess$ = this.courtsService.DeleteCourts(id).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                this.sharedFacade.showMessage(MessageType.success, ' حذف المحكمة', ['تم حذف بنجاح']);
                const prev = this.CourtsSubject$.getValue();
                const result = prev.filter((x: any) => x.id != id);
                this.CourtsSubject$.next(result);
                this.CourtsSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(deleteCourtsProcess$).pipe().subscribe();
}
GetCourts(): any {
    const getCourtsProcess$ = this.courtsService.GetCourts(1).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.CourtsSubject$.next(res.content);
            } else {
                this.CourtsSubject$.next([]);
                this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب المحاكم', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(getCourtsProcess$).pipe().subscribe();
}
AddCourts(Courts: any): void {
const addCourtsProcess$ = this.courtsService.AddCourts(Courts).pipe(
    tap(res => {
        if (res.type == ResponseType.Success) {
            this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
            const prev = this.CourtsSubject$.getValue();
            this.CourtsSubject$.next(
                produce(prev, (draft: AddCourtsCommand[]) => {
                    Courts.id = res.content;
                    draft.unshift(Courts);
                }));
        } else {
            this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
        }
    }),
    shareReplay()
);
this.sharedFacade.showLoaderUntilCompleted(addCourtsProcess$).pipe().subscribe();
}
UpdateCourts(Courts: any): void {
    const updateCourtsProcess$ = this.courtsService.UpdateCourts(Courts).pipe(
    tap(res => {
        if (res.type == ResponseType.Success) {
            this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
            const prev = this.CourtsSubject$.getValue();
            this.CourtsSubject$.next(
                produce(prev, (draft: CourtsCommand[]) => {
                    const index = draft.findIndex(x => x.id === Courts.id);
                    draft[index] = Courts;
                }));
            this.CourtsSubject$.subscribe();
        } else {
            this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
        }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(updateCourtsProcess$).pipe().subscribe();
}
}