import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import { BaseResponse, MessageType, ResponseType } from '../../../shared/shared.interfaces';
import {produce} from "immer";
import {AddEmployeeServices} from "./add-employee.services";
import { GetEmployeeCommand } from './add-employee.interface';
import { GetJobTitleCommand } from '../job-title/job-title.interface';

    @Injectable()
    export class AddEmployeeFacade {

    addEmployeeSubject$ = new BehaviorSubject<BaseResponse<any>>({type: 0, messages : [''], content: null});
    public addEmployee$ = this.addEmployeeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private addEmployeeServices: AddEmployeeServices
    ) {
    }
    AddEmployee(AddEmployee: any): void {
        const addEmployeeProcess$ = this.addEmployeeServices.AddEmployee(AddEmployee).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                  this.addEmployeeSubject$.next(res);
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                  this.addEmployeeSubject$.next(res);

                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addEmployeeProcess$).pipe().subscribe();
    }
}
