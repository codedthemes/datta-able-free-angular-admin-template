import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-paging',
  templateUrl: './breadcrumb-paging.component.html',
  styleUrls: ['./breadcrumb-paging.component.scss']
})
export class BreadcrumbPagingComponent implements OnInit {
  public breadcrumbTheme: string;
  public defaultPage: number;
  public noDirectionPage: number;
  public boundaryPage: number;
  public advancePage: number;
  public sizePage: number;
  public alignmentPage: number;
  public disablePage: number;
  public isDisabled: boolean;

  constructor() {
    this.breadcrumbTheme = 'theme1';
    this.defaultPage = 5;
    this.noDirectionPage = 4;
    this.boundaryPage = 3;
    this.advancePage = 5;
    this.sizePage = 3;
    this.alignmentPage = 3;
    this.disablePage = 3;
    this.isDisabled = true;
  }

  ngOnInit() {
  }

}
