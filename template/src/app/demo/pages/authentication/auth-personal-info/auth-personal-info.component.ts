import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-personal-info',
  templateUrl: './auth-personal-info.component.html',
  styleUrls: ['./auth-personal-info.component.scss']
})
export class AuthPersonalInfoComponent implements OnInit {
  public radioButtons: string;
  constructor() {
    this.radioButtons = 'f';
  }

  ngOnInit() {
  }

}
