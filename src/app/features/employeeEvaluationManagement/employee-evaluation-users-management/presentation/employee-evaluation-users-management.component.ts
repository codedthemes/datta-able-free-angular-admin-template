import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageType } from '../../../../shared/shared.interfaces';
import { SharedFacade } from '../../../../shared/shared.facade';
declare var $: any;
@Component({
  selector: 'app-employee-evaluation-users-management',
  templateUrl: './employee-evaluation-users-management.component.html',
  styleUrls: ['./employee-evaluation-users-management.component.scss']
})


// export default class SecondmentToOtherPostionComponent {}
export default class EmployeeEvaluationUsersManagementComponent implements OnInit {
 
  constructor(private fb: FormBuilder,
              // protected banksFacade: BanksFacade,
              private sharedFacade: SharedFacade,
              private cdr: ChangeDetectorRef
            
            ) {

  }

  ngOnInit() {
  }
}
