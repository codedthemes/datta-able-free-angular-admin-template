import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Pages} from 'src/app/shared/shared.interfaces';
import {CoreFacade} from "../core.facade";
import {tap} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor(private router: Router,
              private coreFacade: CoreFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLoggedIn = false;
    this.coreFacade.isLoggedObservable.pipe(tap(res => {
        isLoggedIn = res;
      }),
    ).subscribe();
    if (isLoggedIn) {
      this.router.navigate([Pages.ForgotPassword]);
      return true;
    } else {
      this.router.navigate([Pages.LogIn]);
      return true;
    }
  }
}
