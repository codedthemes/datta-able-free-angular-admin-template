import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation, inject, input } from '@angular/core';
import { Spinkit } from './spinkits';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss', './spinkit-css/sk-line-material.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnDestroy {
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  isSpinnerVisible = true;
  Spinkit = Spinkit;
  readonly backgroundColor = input('#1dc4e9');
  readonly spinner = input(Spinkit.skLine);
  constructor() {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
          this.cdr.detectChanges();
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.isSpinnerVisible = false;
          this.cdr.detectChanges();
        }
      },
      () => {
        this.isSpinnerVisible = false;
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
