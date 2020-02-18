import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-spinner',
  templateUrl: './basic-spinner.component.html',
  styleUrls: ['./basic-spinner.component.scss']
})
export class BasicSpinnerComponent implements OnInit {
  public btnLoader: boolean;
  public submitLoader: boolean;

  constructor() {
    this.btnLoader = false;
    this.submitLoader = false;
  }

  ngOnInit() {
  }

  onBtnLoader() {
    this.btnLoader = true;
    setTimeout(() => {
      this.btnLoader = false;
    }, 2000);
  }

  onSubmitLoader() {
    this.submitLoader = true;
    setTimeout(() => {
      this.submitLoader = false;
    }, 2000);
  }

}
