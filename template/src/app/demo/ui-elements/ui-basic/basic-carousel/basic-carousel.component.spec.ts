import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCarouselComponent } from './basic-carousel.component';

describe('BasicCarouselComponent', () => {
  let component: BasicCarouselComponent;
  let fixture: ComponentFixture<BasicCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
