export interface GetEmployeeEvaluationCommand{
    id :string;
    employeeId :string;
    employeeName :string;
    year :number;
    evaluationId :number;
    evaluationName :string;
}
export interface AddEmployeeEvaluationCommand{
    employeeId :string;
    year :number;
    evaluationId :number;
}
export interface UpdateEmployeeEvaluationCommand{
    id :string;
    employeeId :string;
    year :number;
    evaluationId :number;
}
export interface ListItem {
    label: string;
    value: string;
}