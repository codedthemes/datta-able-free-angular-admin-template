import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsComponent } from './courts.component';

describe('MainBanksComponent', () => {
  let component: CourtsComponent;
  let fixture: ComponentFixture<CourtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
