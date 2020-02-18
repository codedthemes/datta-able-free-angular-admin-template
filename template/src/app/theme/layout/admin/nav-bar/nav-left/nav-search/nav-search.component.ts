import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {
  public isSearch: boolean;
  constructor() {
    this.isSearch = false;
  }

  ngOnInit() { }

}
