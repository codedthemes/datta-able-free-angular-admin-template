import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {DefinitionPositionServices} from "./definition-position.services";
import {
  AddPositionCommand,
  GetPositionCommand,
  GetLocationsCommand,
  UpdatePositionCommand
} from './definition-position.interface';

    @Injectable()
    export class DefinitionPositionFacade {

      public PositionSubject$ = new BehaviorSubject<GetPositionCommand[]>([]);
    public position$ = this.PositionSubject$.asObservable();
      public locationsSubject$ = new BehaviorSubject<GetLocationsCommand[]>([]);
    public locations$ = this.locationsSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private definitionPositionService: DefinitionPositionServices
    ) {
    }
    deletePosition(id: string): void {
        const deleteJobTitleProcess$ = this.definitionPositionService.DeletePosition(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف وصف الوظيفي', ['تم حذف بنجاح']);
                    const prev = this.PositionSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.PositionSubject$.next(result);
                    this.PositionSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteJobTitleProcess$).pipe().subscribe();
    }
    GetPosition(PositionCode: string, JobTitleId: string): any {
        const getJobTitleProcess$ = this.definitionPositionService.GetPosition(PositionCode,  JobTitleId).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                  if (res.content.length == 0){
                    this.PositionSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.warning, 'لايوجد نتائج', res.messages);

                  }else {
                    this.PositionSubject$.next(res.content);
                  }
                } else {
                    this.PositionSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getJobTitleProcess$).pipe().subscribe();
    }
    GetLocations(): any {
        const getLocationsProcess$ = this.definitionPositionService.GetLocations().pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.locationsSubject$.next(res.content);
                } else {
                    this.locationsSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getLocationsProcess$).pipe().subscribe();
    }
    AddPosition(Position: any): void {
        const addPositionProcess$ = this.definitionPositionService.AddPosition(Position).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.PositionSubject$.getValue();
                    this.PositionSubject$.next(
                        produce(prev, (draft: GetPositionCommand[]) => {
                          Position.id = res.content;
                            draft.unshift(Position);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addPositionProcess$).pipe().subscribe();
    }
    UpdatePosition(Position: any): void {
        const updatePositionProcess$ = this.definitionPositionService.UpdatePosition(Position).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.PositionSubject$.getValue();
                    this.PositionSubject$.next(
                        produce(prev, (draft: GetPositionCommand[]) => {
                            const index = draft.findIndex(x => x.id === Position.id);
                            draft[index] = Position;
                        }));
                    this.PositionSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updatePositionProcess$).pipe().subscribe();
    }
}
