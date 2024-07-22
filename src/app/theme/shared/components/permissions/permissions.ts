import {Injectable} from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class Permissions {


  public hasPermission(permissionKey: string,permission: Array<string>){
    const has = permission.find(x => x === permissionKey);
    const  res = has === undefined ?  false:  true;
    return res;
  }
}

