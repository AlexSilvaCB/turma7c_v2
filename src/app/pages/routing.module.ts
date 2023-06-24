import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { RelatosComponent } from './relatos/relatos.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'relatos',
    component:RelatosComponent
  },
  {
    path:'cadastros',
    component:CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }