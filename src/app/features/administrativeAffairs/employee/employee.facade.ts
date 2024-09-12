import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {EmployeeServices} from "./employee.services";
import { GetEmployeeCommand, UpdateEmployeeCommand} from "./employee.interface";


@Injectable()
export class EmployeeFacade {

    employeeSubject$ = new BehaviorSubject<GetEmployeeCommand[]>([]);
    public employee$ = this.employeeSubject$.asObservable();
  employeePageSubject$ = new BehaviorSubject<GetEmployeeCommand[]>([]);
  public employeePage$ = this.employeePageSubject$.asObservable();

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
  GetEmployeePage(SearchType,Value): any {
        const getEmployeesProcess$ = this.EmployeesServices.GetEmployeePage(SearchType,Value).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.employeePageSubject$.next(res.content);
                } else {
                    this.employeePageSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب موظفين', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getEmployeesProcess$).pipe().subscribe();
    }
    UpdateEmployee(Employee: any): void {
    const updateEmployeeProcess$ = this.EmployeesServices.UpdateEmployee(Employee).pipe(
        tap(res => {
            if (res.type == ResponseType.Success) {
                this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                const prev = this.employeeSubject$.getValue();
                this.employeeSubject$.next(
                    produce(prev, (draft: GetEmployeeCommand[]) => {
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
