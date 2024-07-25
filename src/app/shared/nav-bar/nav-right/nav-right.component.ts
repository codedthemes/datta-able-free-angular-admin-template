// angular import
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../../core/auth/auth.store';
import { SharedFacade } from '../../shared.facade';
import { CoreConstants } from '../../../core/core.constants';
import { CookieService } from 'ngx-cookie-service';
import { CoreFacade } from '../../../core/core.facade';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})

export class NavRightComponent implements OnInit {
  userName: string | undefined = 'مسؤول';


  constructor(private router: Router,
              private authStore: AuthStore,
              public sharedFacade: SharedFacade,
              public cookieService: CookieService,
  ) {
    this.userName = this.cookieService.get(CoreConstants.userName);


  }

  ngOnInit(): void {
    this.userName = this.cookieService.get(CoreConstants.userName);

  }
  logout(): void {
    this.cookieService.delete(CoreConstants.temporaryTokenKey);
    this.cookieService.delete(CoreConstants.tokenKey);
    this.cookieService.set(CoreConstants.userPermission, JSON.stringify([]));
    this.cookieService.delete(CoreConstants.userPermission);
    this.router.navigate(['login']);

  }
}
