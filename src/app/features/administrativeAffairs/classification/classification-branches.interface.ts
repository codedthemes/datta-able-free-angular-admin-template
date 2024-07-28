export interface ClassificationBranchCommand{
    id :string;
    name :string;
}
export interface AddClassificationBranchCommand{
    name :string;
}
export interface JobClassificationCommand{
  id :number;
    name :string;
  "minimumWage": string,
  "maximumWage": string
}
