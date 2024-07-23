export interface GetClassificationBranchCommand{
    id :string;
    name :string;
    isFamilyBonuse: boolean;
}
export interface AddClassificationBranchCommand{
    name :string;
}
export interface UpdateClassificationBranchCommand{
    id :string;
    name :string;
}
