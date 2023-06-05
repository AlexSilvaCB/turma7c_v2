import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatosComponent } from './relatos.component';

describe('RelatosComponent', () => {
  let component: RelatosComponent;
  let fixture: ComponentFixture<RelatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatosComponent]
    });
    fixture = TestBed.createComponent(RelatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
