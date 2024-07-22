import { Component, OnInit } from '@angular/core';
import {SharedFacade} from "../shared.facade";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(public sharedFacade: SharedFacade) {
  }



  ngOnInit(): void {

    

  }

  

}
