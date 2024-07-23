import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {UsersServices} from "./users.services";
import {addUserCommand, GetUsersCommand, updateUserCommand} from "./users.interface";

    @Injectable()
    export class UsersFacade {

    private UserSubject$ = new BehaviorSubject<GetUsersCommand[]>([]);
    public Users$ = this.UserSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private UserServices: UsersServices
    ) {
    }
    deleteUser(id: string): void {
        const deleteUserProcess$ = this.UserServices.DeleteUser(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف مستخدم', ['تم حذف بنجاح']);
                    const prev = this.UserSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.UserSubject$.next(result);
                    this.UserSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteUserProcess$).pipe().subscribe();
    }
    GetUser(): any {
        const getUserProcess$ = this.UserServices.GetUsers().pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.UserSubject$.next(res.content);
                } else {
                    this.UserSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getUserProcess$).pipe().subscribe();
    }
    AddUser(User: any): void {
        const addUserProcess$ = this.UserServices.AddUser(User).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.UserSubject$.getValue();
                    this.UserSubject$.next(
                        produce(prev, (draft: GetUsersCommand[]) => {
                            User.id = res.content;
                            User.password = '';
                            User.confirmpassword = '';
                            draft.unshift(User);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addUserProcess$).pipe().subscribe();
    }
    UpdateUser(User: any): void {
        const updateUserProcess$ = this.UserServices.UpdateUser(User).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.UserSubject$.getValue();
                    this.UserSubject$.next(
                        produce(prev, (draft: GetUsersCommand[]) => {
                            const index = draft.findIndex(x => x.id === User.id);
                            User.password = '';
                            User.confirmpassword = '';
                            draft[index] = User;
                        }));
                    this.UserSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateUserProcess$).pipe().subscribe();
    }
}