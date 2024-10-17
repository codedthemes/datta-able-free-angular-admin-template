export type EmployeeEvaluationManagementComponentTabs = "General" | "Functions" | "Details" | "Table";

export interface GetEmployeeCommand{
    id :string;
    name :string;
    employeeCode :string;
    procedureCode :number;
    procedureCodeName :string;
    positionId :string;
    jobClassificationName: string;
    positionCode :string;
    nid :string;
    nameEn :string;
    birthDate :string;
    socialStatus :number;
    familyData :any;
    gender :number;
    genderName :string;
    nationalityID :string;
    nationalityIDName :string;
    identificationCardNumber :string;
    passportNumber :string;
    overtime :number;
    hireDate :string;
    socialStatusSalaries :number;
    basicSalary :number;
    financialNumber :number;
    socialSecurityNumber :number;
    phoneNumber :string;
    grossSalary: string;
    bonus: [];
    effDate :string;
    procedureDateLast :string;
    costCenter :string;
    managementName :string;
    locationName :string;
    jobCode :string;
    jobTitleId :string;
    jobTitleName :string;
    upgradeDate :string;
    payrollStatus :number;
  }
  