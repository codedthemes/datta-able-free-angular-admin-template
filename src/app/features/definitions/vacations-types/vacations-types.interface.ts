
export interface GetVacationsTypeCommand{
    id :string;
    name :string;
    yearlyBalanceCeiling: number;
    minimumRequest: number;
    maximumRequest: number;
    salaryDiscountRate: number;
    gender: number;
    isGrantedOnlyOnce: boolean;
}
export interface AddVacationsTypeCommand{
    name :string;
    yearlyBalanceCeiling: number;
    minimumRequest: number;
    maximumRequest: number;
    salaryDiscountRate: number;
    gender: number;
    isGrantedOnlyOnce: boolean;
}
