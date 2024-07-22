import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SharedFacade } from '../../shared/shared.facade';
import { MessageType } from '../../shared/shared.interfaces';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CoreConstants } from '../core.constants';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              @Inject(CookieService) private cookieService: CookieService,
              private sharedFacade: SharedFacade) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        this.sharedFacade.loadingOff();
        const error = ['يبدو ان المنظومة متوقفه حاليا يرجي اعادة المحاولة في وقت لاحق.'];
        if (err.status === 401 || err.status === 403) {
          this.cookieService.delete(CoreConstants.tokenKey);
          this.router.navigate(['/login']);
          // this.location.reload();
        } else {
          this.sharedFacade.showMessage(MessageType.error, 'خطأ', error);
        }
        return throwError(error);
      }));
  }
}
