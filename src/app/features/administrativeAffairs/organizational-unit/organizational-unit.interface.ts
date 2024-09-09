export interface UnitsCommand{
    id :string;
    name :string;
}
export interface UnitTypeCommand{
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
  costCenter :string;
  organizationStructureTypeId :string;
  approvalDate :string;
  notes :[];

}
export interface AddOrganizationalUnitCommand{
    name :string;
    parentId :string;
    classificationId :string;
  costCenter :string;
  organizationStructureTypeId :string;
  approvalDate :string;
  notes :[];
}
export interface UpdateOrganizationalUnitCommand{
    id :string;
    name :string;
    parentId :string;
    classificationId :string;
  costCenter :string;
  organizationStructureTypeId :string;
  approvalDate :string;
  notes :[];
}
export interface ListItem {
    label: string;
    value: string;
}
