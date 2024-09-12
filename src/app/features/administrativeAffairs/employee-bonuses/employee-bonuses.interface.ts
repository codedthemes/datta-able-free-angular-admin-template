
export interface GetEmployeeBonusesCommand{
    id :string;
  employeeCode :string;
  positionId: string;
  positionCode: string;
  mame: string;
  NID: string;
  nameEn: string;
  phoneNumber: string;
  basicSalary: string;
  grossSalary: string;
  bonus: BonusInfoDataModel[];
  bonusHistory:  BonusInfoDataModel[];
}

export interface BonusInfoDataModel{
  id: string;
  name: string;
  amount: string;
  dateOfGet: string;
  createdBy: string;
  createdDate: string;
  deleteDate: string;
    isActive: number;
}

export interface AddEmployeeBonusesCommand{
    discount: number;
    penaltyTypeId: number;
}
export interface UpdateEmployeeBonusesCommand{
    id :string;
    penaltyTypeId: number;
    discount: number;
}
export let optionsPenaltyType = [
    { value: 1, label: 'تأخير الساعة' },
    { value: 2, label: 'غياب يوم' },
    { value: 3, label: 'تأخير نصف يوم' },
];
