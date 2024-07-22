import { SharedModule } from '../../../../theme/shared/shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-classification-bankBranches',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './classification-bankBranches.component.html',
  styleUrls: ['./classification-bankBranches.component.scss']
})
export default class ClassificationBankBranchesComponent {}
