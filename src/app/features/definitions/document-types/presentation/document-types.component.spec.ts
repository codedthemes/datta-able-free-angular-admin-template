import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypesComponent } from './document-types.component';

describe('BonusesTypesComponent', () => {
  let component: DocumentTypesComponent;
  let fixture: ComponentFixture<DocumentTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
