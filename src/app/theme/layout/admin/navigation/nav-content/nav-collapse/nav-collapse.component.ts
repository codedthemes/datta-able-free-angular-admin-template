// angular import
import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

// project import
import { NavigationItem } from '../../navigation';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', display: 'block' }),
        animate('250ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class NavCollapseComponent {
  // public props
  visible = false;
  @Input() item: NavigationItem;

  // public method
  navCollapse(e) {
    this.visible = !this.visible;
    let parent = e.target;
    parent = parent.parentElement;

    const sections = document.querySelectorAll('.pcoded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }
    let first_parent = parent.parentElement;
    let pre_parent = parent.parentElement.parentElement;
    if (first_parent.classList.contains('pcoded-hasmenu')) {
      do {
        first_parent.classList.add('pcoded-trigger');
        first_parent = first_parent.parentElement.parentElement.parentElement;
      } while (first_parent.classList.contains('pcoded-hasmenu'));
    } else if (pre_parent.classList.contains('pcoded-submenu')) {
      do {
        pre_parent.parentElement.classList.add('pcoded-trigger');
        pre_parent = pre_parent.parentElement.parentElement.parentElement;
      } while (pre_parent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
  }
}
