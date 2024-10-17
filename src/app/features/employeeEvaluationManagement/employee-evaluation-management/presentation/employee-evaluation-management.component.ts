import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeEvaluationManagementComponentTabs } from '../employee-evaluation-management.interface';
import { EmployeeEvaluationManagementFacade } from '../employee-evaluation-management.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-evaluation-management',
  templateUrl: './employee-evaluation-management.component.html',
  styleUrls: ['./employee-evaluation-management.component.scss']
})
export default class EmployeeEvaluationManagementComponent implements OnInit, OnDestroy {
  constructor(private employeeEvaluationManagementFacade: EmployeeEvaluationManagementFacade) {}
  currentTab: EmployeeEvaluationManagementComponentTabs = 'Details';
  // private selectedEmployeeSub: Subscription;

  ngOnInit() {
    // this.employeeEvaluationManagementFacade.getEmployee(11111);
    // this.selectedEmployeeSub = this.employeeEvaluationManagementFacade.selectedEmployee$.subscribe((data) => {
    //   console.log(data);
    // })
  }

  ngOnDestroy(): void {
    // this.selectedEmployeeSub.unsubscribe();
  }

  changeTab(tab: EmployeeEvaluationManagementComponentTabs) {
    this.currentTab = tab;
  }
}
