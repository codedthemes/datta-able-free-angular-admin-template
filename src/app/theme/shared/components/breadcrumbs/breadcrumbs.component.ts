// angular import
import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

// project import
import { NavigationItem } from '../../../layout/admin/navigation/navigation';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  @Input() type: string;

  navigation: any;
  breadcrumbList: Array<any> = [];
  navigationList: any;

  constructor(
    private _router: Router,
    public nav: NavigationItem,
    private titleService: Title,
  ) {
    this.navigation = this.nav.get();
    this.setBreadcrumb();
  }

  setBreadcrumb() {
    let routerUrl: string;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        this.breadcrumbList.length = 0;
        const activeLink = router.url;
        this.filterNavigation(activeLink);
      }
    });
  }

  filterNavigation(activeLink) {
    let result: any;
    let title = 'Welcome';
    this.navigation.forEach(function (a) {
      if (a.type === 'item' && 'url' in a && a.url === activeLink) {
        result = [
          {
            url: 'url' in a ? a.url : false,
            title: a.title,
            breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
            type: a.type,
          },
        ];
        title = a.title;
      } else {
        if (a.type === 'group' && 'children' in a) {
          a.children.forEach(function (b) {
            if (b.type === 'item' && 'url' in b && b.url === activeLink) {
              result = [
                {
                  url: 'url' in b ? b.url : false,
                  title: b.title,
                  breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                  type: b.type,
                },
              ];
              title = b.title;
            } else {
              if (b.type === 'collapse' && 'children' in b) {
                b.children.forEach(function (c) {
                  if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                    result = [
                      {
                        url: 'url' in b ? b.url : false,
                        title: b.title,
                        breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                        type: b.type,
                      },
                      {
                        url: 'url' in c ? c.url : false,
                        title: c.title,
                        breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                        type: c.type,
                      },
                    ];
                    title = c.title;
                  }
                });
              }
            }
          });
        }
      }
    });
    this.navigationList = result;
    this.titleService.setTitle(title + ' | Datta Able Angular Template');
  }
}
