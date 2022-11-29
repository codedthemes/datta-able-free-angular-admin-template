import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtMorrisComponent } from './crt-morris.component';

describe('CrtMorrisComponent', () => {
  let component: CrtMorrisComponent;
  let fixture: ComponentFixture<CrtMorrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrtMorrisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrtMorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
