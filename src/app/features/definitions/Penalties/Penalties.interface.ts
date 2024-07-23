
export interface GetPenaltiesCommand{
    id :string;
    penaltyTypeId :number;
    discount: number;
    penaltyTypeName: string;
}
export interface AddPenaltiesCommand{
    discount: number;
    penaltyTypeId: number;
}
export interface UpdatePenaltiesCommand{
    id :string;
    penaltyTypeId: number;
    discount: number;
}
export let optionsPenaltyType = [
    { value: 1, label: 'تأخير الساعة' },
    { value: 2, label: 'غياب يوم' },
    { value: 3, label: 'تأخير نصف يوم' },
];