export interface getAllGroup{
    id :string;
    name :string;
    permissions: any;
    // permissions: [PermissionsDictionary];
}
export interface PermissionsDictionary {
    [key: string]: Permission[];
}
export interface Permission {
    id: string;
    name: string;
}
export interface addGroupCommand{
    name :string;
    "permissions": [
        "string"
    ]
}
export interface AddPermissionCommand{
    name: string,
    permissionKey: string,
    isSystemPermission: boolean
}
export interface updateGroupCommand{
    id :string;
    name :string;
    "permissions": [
        "string"
    ]
}
export interface getGroupsMenuCommand{
    id :string;
    name :string;
}
export interface permissionCommand {
    [category: string]: Permission[];
}