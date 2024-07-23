export interface GetUsersCommand{
    id :string;
    employeeId :string;
    employeeName :string;
    systemUserId :string;
    name :string;
    userName :string;
    roleId :string;
    roleName :string;
    password :string;
    isActive :boolean;
}
export interface addUserCommand{
    employeeId :string;
    name :string;
    userName :string;
    roleId :string;
    password :string;
    isActive :boolean;
}
export interface updateUserCommand{
    id :string;
    employeeId :string;
    name :string;
    userName :string;
    roleId :string;
    password :string;
    isActive :boolean;
}
export interface ListItem {
    label: string;
    value: string;
}