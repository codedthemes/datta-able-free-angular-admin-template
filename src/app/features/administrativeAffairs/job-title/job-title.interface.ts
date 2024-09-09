export interface GetJobTitleCommand{
  id :string;
  jobCode :string;
  name :string;
  nameEn :string;
  description :string;
  jobTypeValue :string;
  jobType :number;
  // numberPositionsLibyans :number;
  // numberPositionsForeigners :number;
  jobClassificationId :number;
  jobClassificationName :string;
  scientificQualificationId :string;
  scientificQualificationName :string;
  haveAdmin :boolean;
  Notes: [];
  functionalFamilyId: string;
  functionalFamilyName: string;
  functionalCategory: string;
}
export interface AddJobTitleCommand{
    name :string;
    authorizedToAccredit :boolean;
    jobClassificationId :number;
    organizationStructureId :string;
    organizationStructureName :string;
  Notes: [];
  functionalFamilyId: string;
}
export interface UpdateJobTitleCommand{
    id :string;
    name :string;
    authorizedToAccredit :boolean;
    jobClassificationId :number;
    organizationStructureId :string;
    organizationStructureName :string;
  Notes: [];
  functionalFamilyId: string;
}
export interface ListItem {
    label: string;
    value: string;
}
export interface functionalFamily {
  id :string;
  name :string;
}
