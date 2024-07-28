import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {ScientificQualificationsServices} from "./scientific-qualifications.services";
import {
    AddScientificQualificationsCommand,
    ScientificQualificationsCommand
} from "./scientific-qualifications.interface";


@Injectable()
export class ScientificQualificationsFacade {
ScientificQualificationsSubject$ = new BehaviorSubject<ScientificQualificationsCommand[]>([]);
public ScientificQualifications$ = this.ScientificQualificationsSubject$.asObservable();

constructor(
private sharedFacade: SharedFacade,
private scientificQualificationsService: ScientificQualificationsServices
) {
}

deleteScientificQualifications(id: string): void {
    const deleteScientificQualificationsProcess$ = this.scientificQualificationsService.DeleteScientificQualifications(id).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                this.sharedFacade.showMessage(MessageType.success, ' حذف المؤهل العلمي', ['تم حذف بنجاح']);
                const prev = this.ScientificQualificationsSubject$.getValue();
                const result = prev.filter((x: any) => x.id != id);
                this.ScientificQualificationsSubject$.next(result);
                this.ScientificQualificationsSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(deleteScientificQualificationsProcess$).pipe().subscribe();
}
GetScientificQualifications(): any {
    const getScientificQualificationsProcess$ = this.scientificQualificationsService.GetScientificQualifications(1).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.ScientificQualificationsSubject$.next(res.content);
            } else {
                this.ScientificQualificationsSubject$.next([]);
                this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب المؤهلات العلمية', res.messages);
            }
        }),
        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(getScientificQualificationsProcess$).pipe().subscribe();
}
AddScientificQualifications(ScientificQualifications: any): void {
    const addScientificQualificationsProcess$ = this.scientificQualificationsService.AddScientificQualifications(ScientificQualifications).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
                const prev = this.ScientificQualificationsSubject$.getValue();
                this.ScientificQualificationsSubject$.next(
                    produce(prev, (draft: AddScientificQualificationsCommand[]) => {
                        ScientificQualifications.id = res.content;
                        draft.unshift(ScientificQualifications);
                    }));
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(addScientificQualificationsProcess$).pipe().subscribe();
}
UpdateScientificQualifications(ScientificQualifications: any): void {

    const updateScientificQualificationsProcess$ = this.scientificQualificationsService.UpdateScientificQualifications(ScientificQualifications).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                const prev = this.ScientificQualificationsSubject$.getValue();
                this.ScientificQualificationsSubject$.next(
                    produce(prev, (draft: ScientificQualificationsCommand[]) => {
                        const index = draft.findIndex(x => x.id === ScientificQualifications.id);
                        draft[index] = ScientificQualifications;
                    }));
                this.ScientificQualificationsSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(updateScientificQualificationsProcess$).pipe().subscribe();
}
}
