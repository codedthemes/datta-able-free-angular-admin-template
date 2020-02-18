import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: string;
  @Input() dismiss: string;

  public dismissAlert(element) {
    element.parentElement.removeChild(element);
  }

  constructor() { }

  ngOnInit() {
  }

}
