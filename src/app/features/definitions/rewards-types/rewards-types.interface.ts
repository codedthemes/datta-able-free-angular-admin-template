export interface GetRewardsCommand{
    id :string;
    name :string;
    value: number;
    percentage: number;
    calculatingRewardValueId: number;
    calculatingRewardValueName: string;
    rewardTypeId :number;
    rewardTypeName :string;
}
export interface AddRewardsCommand{
    name :string;
    value: number;
    percentage: number;
    calculatingRewardValueId: number;
    rewardTypeId :number;
}
export interface UpdateRewardsCommand{
    id :string;
    name :string;
    value: number;
    percentage: number;
    calculatingRewardValueId: number;
    rewardTypeId :number;
}
export let optionsRewardType = [
    { value: 1, label: 'مكافأة خاضعة لضريبة الجهاد' },
    { value: 2, label: 'مكافأة خاضعة لكافة الضرائب' },
    { value: 3, label: 'مكافأة غير خاضعة لأي ضريبة' },
];
export let optionsCalculatingReward  = [
    { value: 1, label: 'قيمة متغيرة' },
    { value: 2, label: 'قيمة ثابتة' },
    { value: 3, label: 'نسبة' },
];
