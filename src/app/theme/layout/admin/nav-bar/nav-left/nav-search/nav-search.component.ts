// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-search',
  imports: [SharedModule],
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent {
  // public props
  searchInterval;
  searchWidth: number;
  searchWidthString: string;

  // constructor
  constructor() {
    this.searchWidth = 0;
  }

  // public method
  searchOn() {
    document.querySelector('#main-search').classList.add('open');
    this.searchInterval = setInterval(() => {
      if (this.searchWidth >= 170) {
        clearInterval(this.searchInterval);
        // return false;
      }
      this.searchWidth = this.searchWidth + 30;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }

  searchOff() {
    this.searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        document.querySelector('#main-search').classList.remove('open');
        clearInterval(this.searchInterval);
        // return false;
      }
      this.searchWidth = this.searchWidth - 30;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }
}
