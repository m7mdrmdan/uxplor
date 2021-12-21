import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandReviewsComponent } from './brand-reviews.component';

describe('BrandReviewsComponent', () => {
  let component: BrandReviewsComponent;
  let fixture: ComponentFixture<BrandReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
