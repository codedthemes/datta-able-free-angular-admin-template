import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificQualificationsComponent } from './scientific-qualifications.component';

describe('MainBanksComponent', () => {
  let component: ScientificQualificationsComponent;
  let fixture: ComponentFixture<ScientificQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScientificQualificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScientificQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
