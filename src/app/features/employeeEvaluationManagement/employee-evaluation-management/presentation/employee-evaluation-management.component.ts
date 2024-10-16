import { Component, OnInit } from '@angular/core';
import { EmployeeEvaluationManagementComponentTabs } from '../employee-evaluation-management.interface';

@Component({
  selector: 'app-employee-evaluation-management',
  templateUrl: './employee-evaluation-management.component.html',
  styleUrls: ['./employee-evaluation-management.component.scss']
})
export default class EmployeeEvaluationManagementComponent implements OnInit {
  // registerForm = this.fb.group({
  //   id: [''],
  //   name: ['', Validators.required]
  // });

  constructor() {}
  currentTab: EmployeeEvaluationManagementComponentTabs = 'General';

  ngOnInit() {}

  changeTab(tab: EmployeeEvaluationManagementComponentTabs) {
    this.currentTab = tab;
  }
}
