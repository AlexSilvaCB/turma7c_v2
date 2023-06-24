import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Component
import { HeaderComponent } from './header/header.component';
import { SectionCarrosselComponent } from './section-carrossel/section-carrossel.component';
import { SectionConteudoComponent } from './section-conteudo/section-conteudo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionCarrosselComponent,
    SectionConteudoComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    SectionCarrosselComponent,
    SectionConteudoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
