import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: string;
  @Input() dismiss: string;

  constructor() { }

  ngOnInit() {
  }

  public dismissAlert(element) {
    element.remove();
  }

}
