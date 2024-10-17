import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeEvaluationManagementComponentTabs, GetEmployeeCommand } from '../employee-evaluation-management.interface';
import { EmployeeEvaluationManagementFacade } from '../employee-evaluation-management.facade';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-evaluation-management',
  templateUrl: './employee-evaluation-management.component.html',
  styleUrls: ['./employee-evaluation-management.component.scss']
})
export default class EmployeeEvaluationManagementComponent implements OnInit, OnDestroy {
  constructor(private employeeEvaluationManagementFacade: EmployeeEvaluationManagementFacade) {}
  currentTab: EmployeeEvaluationManagementComponentTabs = 'Details';
  
  private selectedEmployeeSub: Subscription;
  selectedEmployee: GetEmployeeCommand

  ngOnInit() {
    this.employeeEvaluationManagementFacade.getEmployee(11111);
    this.selectedEmployeeSub = this.employeeEvaluationManagementFacade.selectedEmployee$.subscribe(employee => {
      this.selectedEmployee = employee;
    });
  }

  ngOnDestroy(): void {
    this.selectedEmployeeSub.unsubscribe();
  }

  changeTab(tab: EmployeeEvaluationManagementComponentTabs) {
    this.currentTab = tab;
  }
}
