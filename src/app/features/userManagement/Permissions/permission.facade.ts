import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {PermissionServices} from "./permission.services";
import {getAllGroup, getGroupsMenuCommand, permissionCommand, PermissionsDictionary} from "./permission.interface";


@Injectable()
export class PermissionFacade {

    private AllGroupSubject$ = new BehaviorSubject<getAllGroup[]>([]);
    public AllGroup$ = this.AllGroupSubject$.asObservable();
    private GroupsMenuSubject$ = new BehaviorSubject<getGroupsMenuCommand[]>([]);
    public GroupsMenu$ = this.GroupsMenuSubject$.asObservable();
    permissionSubject$ = new BehaviorSubject<any>({});
    public permission$ = this.permissionSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private permissionServices: PermissionServices
    ) {
    }
    deleteGroup(id: string): void {
        const deleteGroupProcess$ = this.permissionServices.DeleteGroup(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف مجموعة', ['تم حذف بنجاح']);
                    const prev = this.AllGroupSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.AllGroupSubject$.next(result);
                    this.AllGroupSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteGroupProcess$).pipe().subscribe();
    }
    GetAllGroup(): any {
        const getAllGroupProcess$ = this.permissionServices.GetAllGroup().pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.AllGroupSubject$.next(res.content);
                } else {
                    this.AllGroupSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب المجموعات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getAllGroupProcess$).pipe().subscribe();
    }
    AddGroup(Group: any): void {
        const addGroupProcess$ = this.permissionServices.AddGroup(Group).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.AllGroupSubject$.getValue();
                    this.AllGroupSubject$.next(
                        produce(prev, (draft: getAllGroup[]) => {
                            Group.id = res.content.id;
                            Group.permissions = res.content.permissions;
                            draft.unshift(Group);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addGroupProcess$).pipe().subscribe();
    }
    UpdateGroup(Group: any): void {
    const updateGroupProcess$ = this.permissionServices.UpdateGroup(Group).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                const prev = this.AllGroupSubject$.getValue();
                this.AllGroupSubject$.next(
                    produce(prev, (draft: getAllGroup[]) => {
                        const index = draft.findIndex(x => x.id === Group.id);
                        Group.permissions = res.content.permissions;
                        draft[index] = Group;
                    }));
                this.AllGroupSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(updateGroupProcess$).pipe().subscribe();
    }
    GetGroupDataById(id: string): any {
        const getGroupDataByIdProcess$ = this.permissionServices.GetGroupDataById(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.AllGroupSubject$.next(res.content);
                } else {
                    this.AllGroupSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب المجموعة', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getGroupDataByIdProcess$).pipe().subscribe();
    }
    GetGroupsMenu(): any {
        const getGroupMenuProcess$ = this.permissionServices.GetGroupsMenu(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.GroupsMenuSubject$.next(res.content);
                } else {
                    this.GroupsMenuSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب المجموعات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getGroupMenuProcess$).pipe().subscribe();
    }
    GetAllPermission(): any {
        const getAllPermissionProcess$ = this.permissionServices.GetAllPermission().pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.permissionSubject$.next(res.content);
                } else {
                    this.permissionSubject$.next({});
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب صلاحيات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getAllPermissionProcess$).pipe().subscribe();
    }

}