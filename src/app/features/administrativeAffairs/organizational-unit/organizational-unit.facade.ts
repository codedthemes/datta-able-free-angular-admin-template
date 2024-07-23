import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {OrganizationalUnitServices} from "./organizational-unit.services";
import {
    AddOrganizationalUnitCommand,
    AllOrganizationalUnitsCommand, UnitsCommand,
    UpdateOrganizationalUnitCommand
} from "./organizational-unit.interface";

@Injectable()
export class OrganizationalUnitFacade {

    private OrganizationalUnitSubject$ = new BehaviorSubject<AllOrganizationalUnitsCommand[]>([]);
    public OrganizationalUnit$ = this.OrganizationalUnitSubject$.asObservable();
    private UnitsByDirectManagerSubject$ = new BehaviorSubject<UnitsCommand[]>([]);
    public UnitsByDirectManager$ = this.UnitsByDirectManagerSubject$.asObservable();
    public ContentIdNextQuerySubject$ = new BehaviorSubject<string>('');
    public ContentIdNextQuery$ = this.ContentIdNextQuerySubject$.asObservable();
    private AllUnitsBranchingFromSpecificUnitSubject$ = new BehaviorSubject<UnitsCommand[]>([]);
    public AllSpecificUnit$ = this.AllUnitsBranchingFromSpecificUnitSubject$.asObservable();
    OrganizationalUnitsByLevelSubject$ = new BehaviorSubject<AllOrganizationalUnitsCommand[]>([]);
    public UnitsByLevel0$ = this.OrganizationalUnitsByLevelSubject$.asObservable();
    OrganizationalUnitsByLevel2Subject$ = new BehaviorSubject<AllOrganizationalUnitsCommand[]>([]);

    public UnitsByLevel2$ = this.OrganizationalUnitsByLevel2Subject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private organizationalUnitServices: OrganizationalUnitServices
    ) {
    }

    deleteOrganizationalUnit(id: string): void {
        const deleteOrganizationalUnitProcess$ = this.organizationalUnitServices.DeleteOrganizationalUnit(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, ' حذف ', ['تم حذف بنجاح']);
                    const prev = this.OrganizationalUnitSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.OrganizationalUnitSubject$.next(result);
                    this.OrganizationalUnitSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteOrganizationalUnitProcess$).pipe().subscribe();
    }

    GetOrganizationalUnit(): any {
        const getOrganizationalUnitProcess$ = this.organizationalUnitServices.GetAllOrganizationalUnits(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.OrganizationalUnitSubject$.next(res.content);
                } else {
                    this.OrganizationalUnitSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getOrganizationalUnitProcess$).pipe().subscribe();
    }

    GetOrganizationalUnitsByLevel(level: number): any {
        const getOrganizationalUnitsByLevelProcess$ = this.organizationalUnitServices.GetOrganizationalUnitsByLevel(1, level).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    if (level == 2) {
                        this.OrganizationalUnitsByLevel2Subject$.next(res.content);

                    } else {
                        this.OrganizationalUnitsByLevelSubject$.next(res.content);
                    }

                } else {
                    this.OrganizationalUnitsByLevelSubject$.next([]);
                    this.OrganizationalUnitsByLevel2Subject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getOrganizationalUnitsByLevelProcess$).pipe().subscribe();
    }

    GetUnitsByDirectManager(directManager: string): any {
        const getUnitsByDirectManagerProcess$ = this.organizationalUnitServices.GetUnitsByDirectManager(directManager).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.UnitsByDirectManagerSubject$.next(res.content);
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getUnitsByDirectManagerProcess$).pipe().subscribe();
    }

    GetOrganizationalUnitIdNextQuery(parentId: string | null | undefined): any {
        const getOrganizationalUnitIdNextQueryProcess$ = this.organizationalUnitServices.GetOrganizationalUnitIdNextQuery(parentId).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.ContentIdNextQuerySubject$.next(res.content);
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getOrganizationalUnitIdNextQueryProcess$).pipe().subscribe();
    }

    GetAllUnitsBranchingFromSpecificUnit(organizationalUnitNumber: string | null | undefined): any {
        const getAllUnitsBranchingFromSpecificUnitProcess$ = this.organizationalUnitServices.GetAllUnitsBranchingFromSpecificUnit(organizationalUnitNumber).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.AllUnitsBranchingFromSpecificUnitSubject$.next(res.content);
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getAllUnitsBranchingFromSpecificUnitProcess$).pipe().subscribe();
    }

    AddOrganizationalUnit(organizationalUnit: any): void {
        const addOrganizationalUnitProcess$ = this.organizationalUnitServices.AddOrganizationalUnit(organizationalUnit).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح', res.messages);
                    const prev = this.OrganizationalUnitSubject$.getValue();
                    this.OrganizationalUnitSubject$.next(
                        produce(prev, (draft: AddOrganizationalUnitCommand[]) => {
                            organizationalUnit.id = res.content.id;
                            organizationalUnit.number = res.content.number;
                            draft.unshift(organizationalUnit);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addOrganizationalUnitProcess$).pipe().subscribe();
    }

    UpdateOrganizationalUnit(organizationalUnit: any): void {
        const updateOrganizationalUnitProcess$ = this.organizationalUnitServices.UpdateOrganizationalUnit(organizationalUnit).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.OrganizationalUnitSubject$.getValue();
                    this.OrganizationalUnitSubject$.next(
                        produce(prev, (draft: AllOrganizationalUnitsCommand[]) => {
                            const index = draft.findIndex(x => x.id === organizationalUnit.id);
                            draft[index] = organizationalUnit;
                            draft[index].number = res.content.number;

                        }));
                    this.OrganizationalUnitSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateOrganizationalUnitProcess$).pipe().subscribe();
    }

    filterOrganizationalUnits(parentId: any, Name: any , Number: any ): any {
        const getOrganizationalUnitProcess$ = this.organizationalUnitServices.FilterOrganizationalUnits(parentId, Name, Number).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.OrganizationalUnitSubject$.next(res.content);
                } else {
                    this.OrganizationalUnitSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getOrganizationalUnitProcess$).pipe().subscribe();
    }
}