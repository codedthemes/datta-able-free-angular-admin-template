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
  currentTab: EmployeeEvaluationManagementComponentTabs = 'Functions';

  metric1 = [
    { name: 'معرفة العمل و الإلمام بالجوانب الفنية المتعلقة بها', score: 80, randomValue1: 75, randomValue2: 62 },
    { name: 'المقدرة على وضع الاولويات في العمل', score: 70, randomValue1: 59, randomValue2: 42 },
    { name: 'الدقة والسرعة في إنجاز الاعمال بانقل نسبة ممكنة من الأخطاء', score: 70, randomValue1: 68, randomValue2: 52 },
    { name: 'المقدرة على أداء العمل بدون رقابة أو متابعة', score: 70, randomValue1: 63, randomValue2: 60 },
    { name: 'درجة الاعتماد عليه', score: 60, randomValue1: 54, randomValue2: 53 },
    { name: 'تقييم الأفكار والمقترحات', score: 60, randomValue1: 48, randomValue2: 29 },
    { name: 'المحافظة على معدات و أدوات العمل', score: 50, randomValue1: 44, randomValue2: 30 },
    { name: 'التعامل مع صعوبات العمل', score: 50, randomValue1: 38, randomValue2: 25 },
    { name: 'إتباع قواعد الأمن والسلامة', score: 50, randomValue1: 41, randomValue2: 32 },
    { name: 'نقل آراء الآخرين ومناقشتها', score: 50, randomValue1: 50, randomValue2: 45 },
    { name: 'المواظبة والمحافظة على مواعيد العمل', score: 50, randomValue1: 43, randomValue2: 37 },
    { name: 'القابلية للتدريب والالتزام بحضور الدورات التدريبية', score: 40, randomValue1: 31, randomValue2: 28 }
  ];

  metric2 = [
    { name: 'تقبل التوجيهات والاستعداد لتنفيذها', score: 50, randomValue1: 34, randomValue2: 34 },
    { name: 'المحافظة على أسرار العمل والمستندات السرية', score: 40, randomValue1: 35, randomValue2: 40 },
    { name: 'القدرة على العمل تحت جملة من الضغوط', score: 40, randomValue1: 29, randomValue2: 29 },
    { name: 'تقبل التجديد في أساليب العمل', score: 40, randomValue1: 31, randomValue2: 31 },
    { name: 'السلوك العام والعناية بالمظهر بمايتناسب بطبيعة الوظيفة', score: 20, randomValue1: 17, randomValue2: 17 }
  ];

  metric3 = [
    { name: 'إنجاز أعمال مميزة على مستوى الشركة (تذكر في تقرير مرفق)', score: 60, randomValue1: 0, randomValue2: 0 },
    { name: 'حل بعض المشاكل المعقدة بالإدارة (تذكر في تقرير مرفق)', score: 50, randomValue1: 0, randomValue2: 0 }
  ];

  metric4 = [
    { name: 'الغياب الغير مشروع', symbol: 'X', count: 0 },
    { name: 'الإجازات الغير مدفوعة الأجر بدون مرتب خلال السنة', symbol: 'Z', count: 0 },
    { name: 'الغياب المشروع مدفوع الأجر خلال السنة', symbol: 'P', count: 5 },
    { name: 'الإجازات المرضية خلال السنة', symbol: 'S', count: 0 },
    { name: 'اللذب أو الأعارة خلال السنة', symbol: 'L', count: 0 },
    { name: 'التدريب خلال السنة', symbol: 'E', count: 0 }
  ];

  private selectedEmployeeSub: Subscription;
  selectedEmployee: GetEmployeeCommand;
  
  ngOnInit() {
    this.employeeEvaluationManagementFacade.getEmployee(11111);
    this.selectedEmployeeSub = this.employeeEvaluationManagementFacade.selectedEmployee$.subscribe((employee) => {
      this.selectedEmployee = employee;
    });
  }

  ngOnDestroy(): void {
    this.selectedEmployeeSub.unsubscribe();
  }

  changeTab(tab: EmployeeEvaluationManagementComponentTabs) {
    this.currentTab = tab;
  }

  getTotalPercentage(){

  }
}
