export interface GetEmployeeCommand{
  id :string;
  name :string;
  employeeCode :string;
  procedureCode :number;
  procedureCodeName :string;
  positionId :string;
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

}
export interface UpdateEmployeeCommand{
  id :string;
  name :string;
  employeeCode :string;
  procedureCode :number;
  procedureCodeName :string;
  positionId :string;
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

}
export interface ListItem {
  label: string;
  value: string;
}
