import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTabsPillsComponent } from './basic-tabs-pills.component';

describe('BasicTabsPillsComponent', () => {
  let component: BasicTabsPillsComponent;
  let fixture: ComponentFixture<BasicTabsPillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTabsPillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicTabsPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
