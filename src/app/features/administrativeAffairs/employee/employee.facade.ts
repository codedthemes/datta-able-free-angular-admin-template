import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {EmployeeServices} from "./employee.services";
import {AddEmployeeCommand, GetEmployeeCommand, UpdateEmployeeCommand} from "./employee.interface";


@Injectable()
export class EmployeeFacade {

    private employeeSubject$ = new BehaviorSubject<GetEmployeeCommand[]>([]);
    public employee$ = this.employeeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private EmployeesServices: EmployeeServices
    ) {
    }
    deleteEmployee(id: string): void {
        const deleteEmployeeProcess$ = this.EmployeesServices.DeleteEmployee(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف موظف', ['تم حذف بنجاح']);
                    const prev = this.employeeSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.employeeSubject$.next(result);
                    this.employeeSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteEmployeeProcess$).pipe().subscribe();
    }
    GetEmployee(): any {
        const getEmployeesProcess$ = this.EmployeesServices.GetEmployee().pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.employeeSubject$.next(res.content);
                } else {
                    this.employeeSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب موظفين', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getEmployeesProcess$).pipe().subscribe();
    }
    AddEmployee(Employee: any): void {
        const addEmployeeProcess$ = this.EmployeesServices.AddEmployee(Employee).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.employeeSubject$.getValue();
                    this.employeeSubject$.next(
                        produce(prev, (draft: AddEmployeeCommand[]) => {
                            Employee.id = res.content;
                            draft.unshift(Employee);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addEmployeeProcess$).pipe().subscribe();
    }
    UpdateEmployee(Employee: any): void {
    const updateEmployeeProcess$ = this.EmployeesServices.UpdateEmployee(Employee).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                const prev = this.employeeSubject$.getValue();
                this.employeeSubject$.next(
                    produce(prev, (draft: UpdateEmployeeCommand[]) => {
                        const index = draft.findIndex(x => x.id === Employee.id);
                        draft[index] = Employee;
                    }));
                this.employeeSubject$.subscribe();
            } else {
                this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
            }
        }),

        shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(updateEmployeeProcess$).pipe().subscribe();
    }
}