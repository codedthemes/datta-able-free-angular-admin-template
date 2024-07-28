import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionPositionComponent } from './definition-position.component';

describe('BankBranchesComponent', () => {
  let component: DefinitionPositionComponent;
  let fixture: ComponentFixture<DefinitionPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefinitionPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinitionPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
