import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionConteudoComponent } from './section-conteudo.component';

describe('SectionConteudoComponent', () => {
  let component: SectionConteudoComponent;
  let fixture: ComponentFixture<SectionConteudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionConteudoComponent]
    });
    fixture = TestBed.createComponent(SectionConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
