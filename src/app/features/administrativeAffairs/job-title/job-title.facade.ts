import {Injectable} from "@angular/core";
import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {JobTitleServices} from "./job-title.services";
import { AddJobTitleCommand, functionalFamily, GetJobTitleCommand, UpdateJobTitleCommand } from './job-title.interface';

    @Injectable()
    export class JobTitleFacade {

    JobTitleSubject$ = new BehaviorSubject<GetJobTitleCommand[]>([]);
    public JobTitles$ = this.JobTitleSubject$.asObservable();
      JobTitleIdSubject$ = new BehaviorSubject<GetJobTitleCommand>(null);
      public JobTitlesId$ = this.JobTitleSubject$.asObservable();
      functionalFamilySubject$ = new BehaviorSubject<functionalFamily[]>(null);
      public functionalFamily$ = this.functionalFamilySubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private jobTitleServices: JobTitleServices
    ) {
    }
    deleteJobTitle(id: string): void {
        const deleteJobTitleProcess$ = this.jobTitleServices.DeleteJobTitle(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف وصف الوظيفي', ['تم حذف بنجاح']);
                    const prev = this.JobTitleSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.JobTitleSubject$.next(result);
                    this.JobTitleSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteJobTitleProcess$).pipe().subscribe();
    }
    GetJobTitle(): any {
        const getJobTitleProcess$ = this.jobTitleServices.GetJobTitle().pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.JobTitleSubject$.next(res.content);
                } else {
                    this.JobTitleSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getJobTitleProcess$).pipe().subscribe();
    }
    GetFunctionalFamily(): any {
        const getFunctionalFamilyProcess$ = this.jobTitleServices.GetFunctionalFamily().pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.functionalFamilySubject$.next(res.content);
                } else {
                    this.functionalFamilySubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getFunctionalFamilyProcess$).pipe().subscribe();
    }
    GetJobTitleId(Id: string): any {
        const getJobTitleIdProcess$ = this.jobTitleServices.GetJobTitleId(Id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.JobTitleIdSubject$.next(res.content[0]);
                } else {
                    this.JobTitleIdSubject$.next(null);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب البيانات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getJobTitleIdProcess$).pipe().subscribe();
    }
    AddJobTitle(JobTitle: any): void {
        const addJobTitleProcess$ = this.jobTitleServices.AddJobTitle(JobTitle).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.JobTitleSubject$.getValue();
                    this.JobTitleSubject$.next(
                        produce(prev, (draft: GetJobTitleCommand[]) => {
                            JobTitle.id = res.content;
                            draft.unshift(JobTitle);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addJobTitleProcess$).pipe().subscribe();
    }
    UpdateJobTitle(JobTitle: any): void {
        const updateJobTitleProcess$ = this.jobTitleServices.UpdateJobTitle(JobTitle).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.JobTitleSubject$.getValue();
                    this.JobTitleSubject$.next(
                        produce(prev, (draft: GetJobTitleCommand[]) => {
                            const index = draft.findIndex(x => x.id == JobTitle.id);
                            draft[index] = JobTitle;
                        }));
                    this.JobTitleSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateJobTitleProcess$).pipe().subscribe();
    }
}
