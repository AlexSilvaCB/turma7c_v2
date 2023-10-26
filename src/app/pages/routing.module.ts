import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { RelatosComponent } from './relatos/relatos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreComponent } from './sobre/sobre.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

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
  },
  {
    path:'pesquisa',
    component:PesquisaComponent
  },
  {
    path:'sobre',
    component:SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
