export interface GetBranchCommand{
    id :string;
    name :string;
    prefix :string;
    bankId :string;
    bankClasscificationId :string;
    bankClasscificationName :string;
  bankName :string;

}
export interface AddBranchCommand{
    name :string;
    prefix :string;
    bankId :string;
    bankClasscificationId :string;
}
export interface UpdateBranchCommand{
    id :string;
    name :string;
    prefix :string;
    bankId :string;
    bankClasscificationId :string;
}
export interface ListItem {
    label: string;
    value: string;
}
