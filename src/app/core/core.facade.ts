import {Injectable} from '@angular/core';
import {BehaviorSubject, shareReplay} from "rxjs";
import {ChangePasswordCommand, VerifyOtpCommand} from "./core.interface";
import {CookieService} from "ngx-cookie-service";
import {tap} from "rxjs/operators";
import {MessageType, Pages, ResponseType} from "../shared/shared.interfaces";
import {SharedFacade} from "../shared/shared.facade";
import {CoreConstants} from "./core.constants";
import {CoreService} from "./core.service";
import {Router} from '@angular/router';
import {Permissions} from "../shared/permissions/permissions";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CoreFacade {

  private loginRequestSubject$ = new BehaviorSubject<boolean>(false);
  isLoggedObservable = this.loginRequestSubject$.asObservable();

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private sharedFacade: SharedFacade,
    private coreService: CoreService,
    private permissions: Permissions
  ) {
  }

  login(user: any): void {
    this.cookieService.delete(CoreConstants.temporaryTokenKey);
    this.cookieService.delete(CoreConstants.tokenKey);
    this.cookieService.delete(CoreConstants.userPermission);
    // this.router.navigate(['statistics']);
    const loginProcess$ = this.coreService.login(user).pipe(
      tap(res => {
        // if (res.type == ResponseType.Success && res.content.isFirstTimeLogin) {
        //   this.cookieService.set(CoreConstants.temporaryTokenKey, res.content.accessToken);
        //   this.cookieService.set(CoreConstants.userPermission, JSON.stringify(res.content.permisstions));
        //   this.loginRequestSubject$.next(false)
        //   this.loginRequestSubject$.next(user.name);
        //   this.router.navigate([Pages.Otp]);
        // } else if (res.type == ResponseType.Success && !res.content.isFirstTimeLogin) {
         if (res.type == ResponseType.Success ) {
          this.cookieService.set(CoreConstants.tokenKey, res.content.accessToken);
          this.cookieService.set(CoreConstants.userPermission, JSON.stringify(res.content.permisstions));
          // this.loginRequestSubject$.next(true);
          // this.cookieService.set(CoreConstants.tokenKey, 'dfsdfsd');
          // this.cookieService.set(CoreConstants.userPermission, JSON.stringify([]));
             this.loginRequestSubject$.next(user.name);

           this.loginRequestSubject$.next(true);
          this.router.navigate(['bank']);
        } else {
          this.sharedFacade.showMessage(MessageType.error, 'خطأ في تسجيل الدخول', res.messages);
          //  this.snackBar.open(res.messages[0], null, {
          //    duration: 2000,
          //  });
           // this.loginRequestSubject$.next(false);
        }
      }),
      shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(loginProcess$).pipe().subscribe();
  }


  changePassword(changePasswordObj: any): void {
    const changePassword: ChangePasswordCommand = {NewPassword: changePasswordObj.NewPassword}
    const changePasswordProcess$ = this.coreService.changePassword(changePassword).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.sharedFacade.showMessage(MessageType.success, 'تمت العملية بنجاح', res.messages);
          this.router.navigate([Pages.LogIn]);
        } else {
          this.sharedFacade.showMessage(MessageType.error, 'خطأ في  تغير كلمة المرور', res.messages);
        }
      }),
      shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(changePasswordProcess$).subscribe(
    );
  }


  forgotPassword(forgotPasswordObj: any): void {
    const forgotPasswordProcess$ = this.coreService.ForgotPassword(forgotPasswordObj).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.cookieService.set(CoreConstants.temporaryTokenKey, res.content.accessToken);
          this.router.navigate([Pages.Otp]);
        } else {
          this.sharedFacade.showMessage(MessageType.error, 'خطأ في تسجيل الدخول', res.messages);
        }
      }),
      shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(forgotPasswordProcess$).pipe().subscribe();
  }

  verifyOtp(verifyOtpObj: any): void {
    const verifyOtpCommand: VerifyOtpCommand = {Otp: verifyOtpObj.otp1 + verifyOtpObj.otp2 + verifyOtpObj.otp3 + verifyOtpObj.otp4 + verifyOtpObj.otp5 + verifyOtpObj.otp6}
    const verifyOtpProcess$ = this.coreService.VerifyOtp(verifyOtpCommand).pipe(
      tap(res => {
        if (res.type == ResponseType.Success) {
          this.cookieService.set(CoreConstants.temporaryTokenKey, res.content.accessToken);
          this.router.navigate([Pages.ChangePassword]);
        } else {
          this.sharedFacade.showMessage(MessageType.error, 'خطأ في  تغير كلمة المرور', res.messages);
        }
      }),
      shareReplay()
    );
    this.sharedFacade.showLoaderUntilCompleted(verifyOtpProcess$).subscribe(
    );
  }

  public hasPermission(permissionKey: string) {
    return this.permissions .hasPermission(permissionKey, JSON.parse(this.cookieService.get(CoreConstants.userPermission)));
  }
}


