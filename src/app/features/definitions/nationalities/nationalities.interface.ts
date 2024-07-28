
export interface GetNationalityCommand{
    id :string;
    name :string;
    nationalityTypeId: number;
    nationalityTypeName: string;
}
export interface AddNationalityCommand{
    name: string;
    nationalityTypeId: number;

}
export interface UpdateNationalityCommand{
    id :string;
    name: string;
    nationalityTypeId: number;
}
export let optionsNationalityType = [
    { value: 1, label: 'مواطن' },
    { value: 2, label: 'اجنبي' },
];
