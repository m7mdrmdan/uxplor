import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPetmanComponent } from './about-petman.component';

describe('AboutPetmanComponent', () => {
  let component: AboutPetmanComponent;
  let fixture: ComponentFixture<AboutPetmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPetmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPetmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
