import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCollapseComponent } from './basic-collapse.component';

describe('BasicCollapseComponent', () => {
  let component: BasicCollapseComponent;
  let fixture: ComponentFixture<BasicCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCollapseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
