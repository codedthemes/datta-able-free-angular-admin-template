export interface GetJobTitleCommand{
    id :string;
    name :string;
    authorizedToAccredit :boolean;
    jobClassificationId :number;
    jobClassificationName :string;
    organizationStructureId :string;
    organizationStructureName :string;
}
export interface AddJobTitleCommand{
    name :string;
    authorizedToAccredit :boolean;
    jobClassificationId :number;
    organizationStructureId :string;
    organizationStructureName :string;
}
export interface UpdateJobTitleCommand{
    id :string;
    name :string;
    authorizedToAccredit :boolean;
    jobClassificationId :number;
    organizationStructureId :string;
    organizationStructureName :string;
}
export interface ListItem {
    label: string;
    value: string;
}