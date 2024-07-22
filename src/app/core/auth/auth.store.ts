import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CoreService} from '../core.service';
import {CoreFacade} from '../core.facade';
import {SharedFacade} from 'src/app/shared/shared.facade';


@Injectable({
  providedIn: 'root'
})
export class AuthStore {


  constructor(private router: Router,
              private authService: CoreService,
              private CoreFacade: CoreFacade,
              private sharedFacade: SharedFacade,
  ) {
  }


}
