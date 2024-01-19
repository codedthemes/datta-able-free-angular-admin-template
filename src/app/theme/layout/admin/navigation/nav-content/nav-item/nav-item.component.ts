// angular import
import { Component, Input } from '@angular/core';

// project import
import { NavigationItem } from '../../navigation';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  // public props
  @Input() item: NavigationItem;

  // public method
  closeOtherMenu(event) {
    const ele = event.target;
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent.parentElement.parentElement;
      const last_parent = up_parent.parentElement;
      const sections = document.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
        sections[i].classList.remove('pcoded-trigger');
      }
      if (parent.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
    if (
      document
        .querySelector('app-navigation.pcoded-navbar')
        .classList.contains('mob-open')
    ) {
      document
        .querySelector('app-navigation.pcoded-navbar')
        .classList.remove('mob-open');
    }
  }
}
