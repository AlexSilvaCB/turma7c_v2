import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Modules
import { SharedModule } from '../shared/shared.module';
//Module routing
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { RelatosComponent } from './relatos/relatos.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    HomeComponent,
    RelatosComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
