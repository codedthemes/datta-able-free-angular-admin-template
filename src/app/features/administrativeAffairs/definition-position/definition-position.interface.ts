export interface GetPositionCommand{
  id :string;
  positionCode :string;
  locationId :boolean;
  locationCode :string;
  locationName :string;
  costCenterCode :string;
  positionType :number;
  positionTypeName :string;
  jobTitleId :string;
  jobTitleName :string;
  organizationStructureId :string;
  organizationStructureName :string;
  organizationStructureList :any;


}
export interface GetLocationsCommand{
    id :number;
  locationCode :string;
  name :string;
}
export interface AddPositionCommand{
  positionCode :string;
  locationId :number;
  costCenterCode :string;
  positionType :number;
  jobTitleId :string;
  organizationStructureId :string;
}
export interface UpdatePositionCommand{
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
