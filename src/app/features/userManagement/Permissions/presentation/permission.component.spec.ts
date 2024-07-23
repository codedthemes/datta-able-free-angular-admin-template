import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionComponent } from './permission.component';

describe('MainBanksComponent', () => {
  let component: PermissionComponent;
  let fixture: ComponentFixture<PermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
