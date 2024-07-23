import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalUnitComponent } from './organizational-unit.component';

describe('BankBranchesComponent', () => {
  let component: OrganizationalUnitComponent;
  let fixture: ComponentFixture<OrganizationalUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationalUnitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizationalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
