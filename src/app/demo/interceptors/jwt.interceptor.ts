import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from "ngx-cookie-service";
import {CoreConstants} from "../core.constants";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(@Inject(CookieService) private cookieService: CookieService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get(CoreConstants.tokenKey);
    const temporaryTokenKey = this.cookieService.get(CoreConstants.temporaryTokenKey);

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

    }
    if (temporaryTokenKey) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + temporaryTokenKey
        }
      });
    }
    return next.handle(request);
  }
}
