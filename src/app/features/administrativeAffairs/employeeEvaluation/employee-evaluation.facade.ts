import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {EmployeeEvaluationServices} from "./employee-evaluation.services";
import {GetEmployeeEvaluationCommand} from "./employee-evaluation.interface";

    @Injectable()
    export class EmployeeEvaluationFacade {

    private EmployeeEvaluationSubject$ = new BehaviorSubject<GetEmployeeEvaluationCommand[]>([]);
    public employeeEvaluations$ = this.EmployeeEvaluationSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private employeeEvaluationServices: EmployeeEvaluationServices
    ) {
    }
    deleteEmployeeEvaluation(id: string): void {
        const deleteEmployeeEvaluationProcess$ = this.employeeEvaluationServices.DeleteEmployeeEvaluation(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف تقييم الموظف', ['تم حذف بنجاح']);
                    const prev = this.EmployeeEvaluationSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.EmployeeEvaluationSubject$.next(result);
                    this.EmployeeEvaluationSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteEmployeeEvaluationProcess$).pipe().subscribe();
    }
    GetEmployeeEvaluation(employeeId : any): any {
        const getEmployeeEvaluationProcess$ = this.employeeEvaluationServices.GetEmployeeEvaluation(employeeId).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.EmployeeEvaluationSubject$.next(res.content);
                } else {
                    this.EmployeeEvaluationSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getEmployeeEvaluationProcess$).pipe().subscribe();
    }
    AddEmployeeEvaluation(EmployeeEvaluation: any): void {
        const addEmployeeEvaluationProcess$ = this.employeeEvaluationServices.AddEmployeeEvaluation(EmployeeEvaluation).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.EmployeeEvaluationSubject$.getValue();
                    this.EmployeeEvaluationSubject$.next(
                        produce(prev, (draft: GetEmployeeEvaluationCommand[]) => {
                            EmployeeEvaluation.id = res.content;
                            draft.unshift(EmployeeEvaluation);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addEmployeeEvaluationProcess$).pipe().subscribe();
    }
    UpdateEmployeeEvaluation(EmployeeEvaluation: any): void {
        const updateEmployeeEvaluationProcess$ = this.employeeEvaluationServices.UpdateEmployeeEvaluation(EmployeeEvaluation).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.EmployeeEvaluationSubject$.getValue();
                    this.EmployeeEvaluationSubject$.next(
                        produce(prev, (draft: GetEmployeeEvaluationCommand[]) => {
                            const index = draft.findIndex(x => x.id === EmployeeEvaluation.id);
                            draft[index] = EmployeeEvaluation;
                        }));
                    this.EmployeeEvaluationSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateEmployeeEvaluationProcess$).pipe().subscribe();
    }
}