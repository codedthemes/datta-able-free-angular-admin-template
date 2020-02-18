import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbPagingComponent } from './breadcrumb-paging.component';

describe('BreadcrumbPagingComponent', () => {
  let component: BreadcrumbPagingComponent;
  let fixture: ComponentFixture<BreadcrumbPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
