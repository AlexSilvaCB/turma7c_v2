import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarrosselComponent } from './section-carrossel.component';

describe('SectionCarrosselComponent', () => {
  let component: SectionCarrosselComponent;
  let fixture: ComponentFixture<SectionCarrosselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCarrosselComponent]
    });
    fixture = TestBed.createComponent(SectionCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
