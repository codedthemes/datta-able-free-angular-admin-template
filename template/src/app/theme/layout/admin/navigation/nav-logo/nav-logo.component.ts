import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss']
})
export class NavLogoComponent implements OnInit {
  @Input() navCollapsed: boolean;
  @Output() onNavCollapse = new EventEmitter();
  public windowWidth: number;

  constructor() {
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.onNavCollapse.emit();
    }
  }

}
