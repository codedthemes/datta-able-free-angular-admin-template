import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-search',
  imports: [SharedModule],
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent {
  @ViewChild('mainSearch', { static: true }) mainSearch!: ElementRef;

   
  searchInterval = null;
  searchWidth = 0;
  searchWidthString = '0px';

  searchOn() {
    this.clearInterval();
    this.mainSearch.nativeElement.classList.add('open');

    this.searchInterval = setInterval(() => {
      if (this.searchWidth >= 170) {
        this.clearInterval();
        return;
      }
      this.searchWidth += 30;
      this.searchWidthString = `${this.searchWidth}px`;
    }, 35);
  }

  searchOff() {
    this.clearInterval();

    this.searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        this.mainSearch.nativeElement.classList.remove('open');
        this.clearInterval();
        return;
      }
      this.searchWidth -= 30;
      this.searchWidthString = `${this.searchWidth}px`;
    }, 35);
  }

  private clearInterval() {
    if (this.searchInterval) {
      clearInterval(this.searchInterval);
      this.searchInterval = null;
    }
  }
}
