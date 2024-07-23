export interface UnitsCommand{
    id :string;
    name :string;
}
export interface AllOrganizationalUnitsCommand{
    id :string;
    name :string;
    number :string;
    code :number;
    level :number;
    classificationId :string;
    classificationsName :string;
    children :[string];
    parentName :string;
    parentId :string;
}
export interface AddOrganizationalUnitCommand{
    name :string;
    parentId :string;
    classificationId :string;
}
export interface UpdateOrganizationalUnitCommand{
    id :string;
    name :string;
    parentId :string;
    classificationId :string;
}
export interface ListItem {
    label: string;
    value: string;
}