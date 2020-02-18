import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-progress-bar',
  templateUrl: './basic-progress-bar.component.html',
  styleUrls: ['./basic-progress-bar.component.scss']
})
export class BasicProgressBarComponent implements OnInit {
  public stripAnimation: boolean;

  constructor() {
    this.stripAnimation = true;
  }

  ngOnInit() {
  }

}
