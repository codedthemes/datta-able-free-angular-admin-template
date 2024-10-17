export interface GetBanksCommand{
    id :string;
    name :string;
    isFamilyBonuse: boolean;
}
export interface AddBankCommand{
    name :string;
}
export interface UpdateBankCommand{
    id :string;
    name :string;
}
