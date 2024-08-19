import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CrudProdutoComponent } from './views/crud-produto/crud-produto.component';
import { NovoComponent } from './componentes/produto/novo/novo.component';
import { EditarComponent } from './componentes/produto/editar/editar.component';
import { ExcluirComponent } from './componentes/produto/excluir/excluir.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: CrudProdutoComponent
  },
  {
    path: "produtos/novo",
    component: NovoComponent 
  },
  {
    path: "produtos/editar/:id",
    component: EditarComponent
  },
  {
    path: "produtos/excluir/:id",
    component: ExcluirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
